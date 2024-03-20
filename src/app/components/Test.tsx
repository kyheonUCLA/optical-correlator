// components/LaserBeamScene.tsx
import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import {Object3D} from "three"

const Test: React.FC = () => {
  const lightRef = useRef<any>();
  const obj = new Object3D()
  obj.position.set(1, 2, 1)
  
  return (
    <directionalLight
        ref={lightRef}
        position={[1, 1, 1]}
        target={obj}
        intensity={1} // Adjust intensity as needed
        color="blue" // Set the color to blue
        castShadow // Enable shadow casting
        shadow-mapSize-width={1024} // Set shadow map size
        shadow-mapSize-height={1024} // Set shadow map size
        shadow-camera-top={2} // Set the cone angle
        shadow-camera-bottom={-2} // Set the cone angle
        shadow-camera-left={-2} // Set the cone angle
        shadow-camera-right={2} // Set the cone angle
        shadow-camera-near={0.01} // Set the near value for the shadow camera
        shadow-camera-far={100} // Set the far value for the shadow camera
      />
  )
};

export default Test;
