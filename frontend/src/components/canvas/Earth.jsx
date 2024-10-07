import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF('./earth/scene.gltf')
  return (
    <mesh>
    <hemisphereLight intensity={4.6} groundColor='black' /> 
        
   <primitive
   object={earth.scene}
   scale={1.5}
   position={ [0.6, -2.1, -1.9]}
   
   />
   </mesh>
  )
}

 const EarthCanvas = () =>{

  return (
    <Canvas
    shadows
    frameloop='demand'
    gl={{preserveDrawingBuffer : true}}
    camera={ {position : [20,3,5], fov : 25}}
    >

      <Suspense fallback={<CanvasLoader/>}>
      <OrbitControls
      autoRotate
      enableZoom={false}
      
      />
      <Earth/>
      </Suspense>


    </Canvas>
  )

  }

export default EarthCanvas