import React from 'react';
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

const Fiber = (props) => {
 const ref = useRef()
 const [hovered, hover] = useState(false)
 const [clicked, click] = useState(false)
 useFrame((state, delta) => (ref.current.rotation.y += 0.051))
 return (
   <mesh
     {...props}
     ref={ref}
     scale={clicked ? 1 : 1}>
     <boxGeometry args={[2, 2, 2]} />
     <meshStandardMaterial color='orange' />
   </mesh>
 )
};

export default Fiber;