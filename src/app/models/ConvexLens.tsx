import React, { useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useModelContext } from "../contexts/ModelContextProvider";
import HighlightModel from "../components/HighlightModel";

const ConvexLens: React.FC<any> = (props) => {
  const { scene } = useGLTF("assets/3d/convexlens.glb");
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
        <mesh rotation={[0, 0, Math.PI/2]} position={[-4.75, 0, 0]} scale={[1.2, 1.2, 1.2]}>
          <primitive object={scene} />
        </mesh>
      </group>
    </HighlightModel>
  );
}

export default ConvexLens