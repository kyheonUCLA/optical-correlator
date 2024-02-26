import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { animated } from "@react-spring/three";
import HighlightModel from "../components/HighlightModel";
import { useModelContext } from "../contexts/ModelContextProvider";

const Disc: React.FC<any> = (props) => {
  const { scene } = useGLTF("assets/3d/light_disc.glb")
  const [active, setActive] = useState(false)
  const { activeModel, setActiveModel } = useModelContext()

  const handelOnClick = () => {
    activeModel?.setActive(false)
    setActiveModel({ active, setActive })
    setActive(!active)
  }

  return (
    <HighlightModel active={active}>
      <animated.group onClick={handelOnClick}>
        <mesh {...props} rotation={[-0.464, -0.26, 0.464]}>
          <primitive scale={0.3} object={scene}/>
        </mesh> 
      </animated.group> 
    </HighlightModel>
  )
}

export default Disc

