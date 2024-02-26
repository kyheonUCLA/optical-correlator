import React from 'react'
import { Bloom, EffectComposer, Outline, DepthOfField, Select, Selection } from '@react-three/postprocessing'
type HighlightModelProps = {
  children: React.ReactNode,
  active: boolean
}

const HighlightModel: React.FC<HighlightModelProps> = ({ children, active }) => {
  return (
    <>
    {active ?  
    <Selection>
      <EffectComposer autoClear={false}>
        <Outline blur edgeStrength={100} />
        <Bloom />
        <DepthOfField />
      </EffectComposer>
      <Select enabled>
        { children }
      </Select>
    </Selection> : children } 
    </>
  )
}

export default HighlightModel