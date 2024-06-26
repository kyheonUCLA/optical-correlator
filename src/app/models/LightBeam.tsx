import React, { useRef, useEffect, useCallback } from 'react';
import { SpotLight as SpotLightImp, Vector3 } from 'three';
import { SpotLight } from '@react-three/drei';

type LightBeamProps = {
 color: string,
 position: [number, number, number],
 target: [number, number, number],
 radius: number,
}

const LightBeam: React.FC<LightBeamProps> = ({ color, position, target, radius }) => {
  const positionVec = new Vector3(...position)
  const targetVec = new Vector3(...target)
  
  const length = positionVec.distanceTo(targetVec)


  const spotLightRef = useCallback((node: SpotLightImp | null) => {
    if (node) {
      console.log(node.position);
    }
 }, []);

 return (
    <SpotLight 
      ref={spotLightRef}
      position={positionVec}
      intensity={1}
      angle={0}
      distance={length}
      attenuation={length}
      anglePower={0} 
      color={color}
      radiusTop={radius}
      radiusBottom={radius}
    /> 
 );
}

export default LightBeam;
