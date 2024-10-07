import React, {Suspense, useEffect, useState} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"

import CanvasLoader from '../Loader'



const Computers = ({isMobile}) => {
  const computer = useGLTF('./desk/scene1.gltf')
  
  return (
  <mesh>
    <hemisphereLight intensity={3.6} groundColor='black' />
      <spotLight
        position={[-15,40,15]}
        angle={0.42}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
    <primitive 
     object={computer.scene}
     scale={isMobile ? 0.065 : 0.13}
     position={isMobile ? [0, -3, -2.2] : [0.6, -3.9, -2.9]}
     rotation={[0.01, -0.25, -0.01]}/> 
  </mesh>
  )
}

const ComputersCanvas = () => {
  const [ismobile,setIsmobile] = useState(false)

  useEffect( ()=>{

    const mediaQuery = window.matchMedia(("max-width : 500px"))

    setIsmobile(mediaQuery.matches)

    const handleMediaQueryChange = (event) =>{
      setIsmobile(event.matches)
    }
    mediaQuery.addEventListener('change', handleMediaQueryChange)

    return () =>{
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }

  },[])
  return (
    <Canvas  shadows camera={ {position : [20,3,5], fov : 25}} gl={{preserveDrawingBuffer : true}}>
      <Suspense fallback={ <CanvasLoader/>}>
      <OrbitControls autoRotate enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2}/>
      <Computers isMobile={ismobile}/>   
      </Suspense>
      <Preload all/>
    </Canvas>
  )
}

export default ComputersCanvas