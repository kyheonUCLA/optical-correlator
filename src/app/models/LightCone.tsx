import React, { useRef, useEffect, useCallback } from 'react';
import { SpotLight as SpotLightImp, Vector3 } from 'three';
import { SpotLight } from '@react-three/drei';

type LightConeProps = {
 color: string,
 position: [number, number, number],
 target: [number, number, number],
 angle: number,
}

const LightCone: React.FC<LightConeProps> = ({ color, position, target, angle }) => {
  const positionVec = new Vector3(...position)
  const targetVec = new Vector3(...target)
  
  const length = positionVec.distanceTo(targetVec)


  const lightRef = useCallback((node: SpotLightImp | null) => {
    if (node) {
      console.log(node.position);
    }
 }, []);

 return (
    <SpotLight 
      ref={lightRef}
      position={positionVec}
      intensity={1}
      angle={angle}
      distance={length}
      attenuation={length}
      anglePower={0} 
      color={color}
    /> 
 );
}

export default LightCone;
