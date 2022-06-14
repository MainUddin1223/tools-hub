import React from 'react';
import { Canvas } from '@react-three/fiber'
import Fiber from './Fiber';
const Spinner = () => {
    return (
        <Canvas className='min-h-screen flex items-center'>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Fiber  position={[0, 0, 0]}/>
      </Canvas>
    );
};

export default Spinner;