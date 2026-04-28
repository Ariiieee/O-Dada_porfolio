/**
 * Builds a simple 3D Next.js–style mark (black disc + white N mark) and writes
 * public/models/nextjs-logo-transformed.glb
 *
 * Run: node scripts/generate-nextjs-logo-glb.mjs
 */
import * as THREE from 'three'
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// GLTFExporter expects browser APIs in Node
if (typeof globalThis.FileReader === 'undefined') {
	globalThis.FileReader = class {
		result = null
		onloadend = null
		readAsArrayBuffer(blob) {
			void blob
				.arrayBuffer()
				.then((ab) => {
					this.result = ab
					if (this.onloadend) this.onloadend()
				})
		}
	}
}

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const outPath = path.join(__dirname, '../public/models/nextjs-logo-transformed.glb')

// Map SVG coords (0–16, y down) to 2D shape in x / y (y up)
function svgToShape(sx, sy) {
	const x = (sx - 8) / 8
	const y = (8 - sy) / 8
	return [x, y]
}

const scene = new THREE.Scene()
scene.name = 'Scene'

const group = new THREE.Group()
group.name = 'nextjs'

const blackMat = new THREE.MeshStandardMaterial({
	color: 0x000000,
	roughness: 0.45,
	metalness: 0.15,
	side: THREE.DoubleSide,
})
const whiteMat = new THREE.MeshStandardMaterial({
	color: 0xffffff,
	roughness: 0.35,
	metalness: 0.05,
	side: THREE.DoubleSide,
})

// Black disc (Geist-style circular mark), faces +Z
const r = 7.375 / 16
const disc = new THREE.Mesh(new THREE.CircleGeometry(r, 72), blackMat)
disc.name = 'disc'
group.add(disc)

// Filled "N" body (one extruded silo, thin depth)
const markShape = new THREE.Shape()
const outline = [
	[5.995, 5.0],
	[4.745, 5.0],
	[4.745, 11.0],
	[5.995, 11.0],
	[5.995, 6.968],
	[11.5, 12.85],
	[12.9, 11.6],
	[5.995, 5.0],
]
{
	const [x0, y0] = svgToShape(outline[0][0], outline[0][1])
	markShape.moveTo(x0, y0)
	for (let i = 1; i < outline.length; i++) {
		const [x, y] = svgToShape(outline[i][0], outline[i][1])
		markShape.lineTo(x, y)
	}
	markShape.closePath()
}

const extrudeSettings = { depth: 0.04, bevelEnabled: false }
const markGeo = new THREE.ExtrudeGeometry(markShape, extrudeSettings)
markGeo.center()
const mark = new THREE.Mesh(markGeo, whiteMat)
mark.name = 'n_mark'
mark.position.z = 0.03
mark.rotation.x = 0
group.add(mark)

// Vertical stroke: M 10.63 11 V 5  (1.25 stroke in SVG)
const strokeW = 1.25 / 16
const strokeH = 6 / 16
const line = new THREE.Mesh(new THREE.PlaneGeometry(strokeW, strokeH), whiteMat)
const [lx, ly] = svgToShape(10.63, 8)
line.position.set(lx, ly, 0.04)
line.name = 'n_stroke'
group.add(line)

scene.add(group)

// Face +Z: rotate entire group if needed — CircleGeometry is XY, camera sees +Z
// Center Y for stroke matches viewBox
scene.scale.setScalar(1)

const exporter = new GLTFExporter()
const data = await exporter.parseAsync(scene, { binary: true })
const buffer = Buffer.isBuffer(data) ? data : Buffer.from(new Uint8Array(data))
fs.mkdirSync(path.dirname(outPath), { recursive: true })
fs.writeFileSync(outPath, buffer)
console.log('Wrote', outPath, `(${buffer.length} bytes)`)
