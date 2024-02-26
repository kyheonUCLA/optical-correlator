

import React, { useState } from "react";
import { useGLTF } from "@react-three/drei";
import { animated, useSpring, config } from "@react-spring/three";
import HighlightModel from "../components/HighlightModel";
import { useModelContext } from "../contexts/ModelContextProvider";


const LaserPointer: React.FC<any> = (props) => {
  const { scene } = useGLTF("assets/3d/laser_pointer2.glb");
  const [active, setActive] = useState(false)
  const { activeModel, setActiveModel } = useModelContext()
  
  const handelOnClick = () => {
    activeModel?.setActive(false)
    setActiveModel({ active, setActive })
    setActive(!active)
  }

  const { scale } = useSpring({ scale: active ? 1.01 : 1, config: config.gentle })

  return (
    <HighlightModel active={active}>
      <animated.group scale={scale} onClick={handelOnClick} {...props}>
        <mesh position={[-10, 0, 0]} scale={0.005} rotation={[0,Math.PI,0]}>
          <primitive object={scene}/>
        </mesh>
      </animated.group>
    </HighlightModel>
  );
}

export default LaserPointer;