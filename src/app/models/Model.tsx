import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { animated } from "@react-spring/three";

const Model: React.FC<any> = ({ file, ...props }) => {

  const { scene } = useGLTF(file as string)

  return (
    <animated.group {...props}>
      <mesh rotation={[0, 0, Math.PI/2]}>
      <primitive object={scene}/>
      </mesh>
   
    </animated.group>
  );
}

export default Model