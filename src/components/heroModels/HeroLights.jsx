import * as THREE from 'three'


const HeroLights = () => {
   return (
      <>

         /*front right spotlight -desk lamp*/
         <spotLight
            position={[2, 5, 6]}
            intensity={100}
            angle={0.15}
            penumbra={0.2}
            color="#fff"
         />

         {/*overhead lamp */}
         <spotLight
            position={[4, 5, 4]}
            angle={0.2}
            intensity={40}
            penumbra={0.5}
            color="#4cc0f0"
         />

         <spotLight
            position={[-3, 5, 5]}
            angle={0.4}
            intensity={60}
            penumbra={1}
            color="#9d4edd"
         />

         {/*this is a special light that provides a soft light */}
         <primitive
            object={new THREE.RectAreaLight("#A259FF", 8, 3, 2)}
            position={[1, 3, 4]}
            intensity={15}
            rotation={[-Math.PI / 4, Math.PI / 4, 0]}
         />

         {/* subtle and scattered for color balance */}
         <pointLight
            position={[0, 1, 0]}
            intensity={10}
            color="#7209b7"
         />

         <pointLight
            position={[0, 2, -1]}
            intensity={10}
            color="#0d00a4"
         />
      </>
   )
}

export default HeroLights