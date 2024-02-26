import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const Slit: React.FC<any> = (props) => {
  const { scene } = useGLTF("assets/3d/single_slit.gltf");
  return (
    <group {...props}>
      <mesh position={[-2, 0, 0]} rotation={[0,0, Math.PI/2]}>
        <primitive object={scene}/>
      </mesh>
    </group>
  );
}

export default Slit