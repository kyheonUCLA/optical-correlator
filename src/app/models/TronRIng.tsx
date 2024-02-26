import React, { useState } from "react";
import { useGLTF } from "@react-three/drei";
import HighlightModel from "../components/HighlightModel";
import { useModelContext } from "../contexts/ModelContextProvider";

const TronRing: React.FC<any> = (props) => {
  const { scene } = useGLTF("assets/3d/ring.glb");
  const [active, setActive] = useState(false)
  const { activeModel, setActiveModel } = useModelContext()

  const handelOnClick = () => {
    activeModel?.setActive(false)
    setActiveModel({ active, setActive })
    setActive(!active)
  }

  return (
    <HighlightModel active={active}>
      <group {...props} onClick={handelOnClick}>
          <mesh rotation={[0,0,Math.PI/2]} position={[-5,0,0]}>
            <primitive object={scene} />
          </mesh>
      </group>
    </HighlightModel>
  );
}

export default TronRing