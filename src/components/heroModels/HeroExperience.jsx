import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive';
import { Room } from './Room';
import HeroLights from './HeroLights';


const HeroExperience = () => {
   const isTablet = useMediaQuery({ query: '(max-width: 1024px)' }); /* using react responsive */
   const isMobile = useMediaQuery({ query: '(max-width: 768px)' }); /* using react responsive */

   return (
      <Canvas camera={{ position: [0, 0, 13], fov: 45 }}>
         <HeroLights />


         <OrbitControls
            enablePan={false}
            enableZoom={!isTablet}
            maxDistance={20}
            minDistance={5}
            minPolarAngle={Math.PI / 5}
            maxPolarAngle={Math.PI / 2} /*this allows us to control where in the screen we can move, look at the model at a nice angle -job of the maxpolarangles*/
         />

         {/*position the 3d model appropriately according to screen size
         group allows us to adjust different things just like the scale of the room  */}
         <group
            scale={isMobile ? 0.7 : 1} /*0.7 times the size of the room 3d model */
            position={[0, -3.5, 0]} /* moves the model down */
            rotation={[0, -Math.PI / 4, 0]} /* rotates the model slightly */
         >
            <Room />
         </group>



      </Canvas>
   )
}

export default HeroExperience

{/*notes:
   -glb models - is a file format that allows us to render 3d scenes and models-you can find on sketchfab
   camera - x-axis, y-axis, and z-axis which is pulled back a bit allowing us to frame the model nicely , fov-allows us to frame it withing our camera
   -OrbitControls - is a component that allows us to control the camera orbiting the scene- allows us to move around this 3d model
   -Canvas - is a component that allows us to render the scene

   to see something withing the canvas,we need to add a 3d object, such as a mesh
   -mesh - is a component that allows us to render the model
   -meshStandardMaterial - is a material that allows us to render the model
   -directionalLight - is a light that allows us to render the model
   -ambientLight - is a light that allows us to render the model - (we can't see anything without a light)

   
   */}