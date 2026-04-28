import React, { useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF, Environment, Float, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

const TechIcon = ({ model }) => {

   const scene = useGLTF(model.modelPath)

   useEffect(() => {
      // constants use `name` (e.g. "TailwindCSS"), not `logoName`
      const isTailwind =
         model.name === "TailwindCSS" || model.logoName === "tailwind"
      if (!isTailwind) return
      // glTF node name in tailwindcss-logo-transformed.glb is "tailwindcss"
      scene.scene.traverse((child) => {
         if (!child.isMesh || child.name !== "tailwindcss") return
         child.material = new THREE.MeshStandardMaterial({
            color: "#22d3ee",
            // Mesh uses COLOR_0; keep vertex colors off so the tint above is visible
            vertexColors: false,
            side: THREE.DoubleSide,
         })
      })
   }, [scene, model.name, model.logoName])

   return (
      <Canvas>
         <ambientLight intensity={0.3} />
         <directionalLight position={[5, 5, 5,]} intensity={1} />
         <Environment preset="city" />
         <OrbitControls enableZoom={false} />

         <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
            <group scale={model.scale} rotation={model.rotation}>
               <primitive object={scene.scene} />
            </group>
         </Float>
      </Canvas>
   )
}

export default TechIcon