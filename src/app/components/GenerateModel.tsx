"use client"
import React, { useEffect, useState } from 'react'

import Model from "../models/Model";

type GenerateModelProps = {
  model: Blob | null
}
const GenerateModel: React.FC<GenerateModelProps> = ({ model }) => {
  const [modelURL, setModelURL] = useState("")

  useEffect(() => {
    if (model instanceof Blob) {
      setModelURL(URL.createObjectURL(model))
    }

    return () => { 
      if (modelURL.length > 0) {
        URL.revokeObjectURL(modelURL) 
      }
    }
  }, [model])

  return (
    <>
      { modelURL.length > 0 ? <Model file={ modelURL }/> : null
        /*inputModelURL.length > 0 ? <Model file={ 'http://127.0.0.1:5000/resources/models/input.gltf' }/> : null */
      }  
    </>
  )
}

export default GenerateModel