import { Html } from '@react-three/drei'
import React, { useEffect, useState } from 'react'
import ColorPicker from './ColorPicker'
import { useModelContext } from '../contexts/ModelContextProvider'
import FileUpload from './FileUpload'
import { useSimulationContext } from '../contexts/SimulationContextProvider'

type ConfiguratorProps = { 
  title: string,
} 

const Configurator: React.FC<any> = () => {
  const {inputImage, setInputImage} = useSimulationContext()

  return (
    <section className='relative z-[999]'>
      <div className='fixed right-3 w-auto h-auto border-2 border-black rounded-2xl mt-2 mb-3 bg-gray-600/30'>
        <h1 className='text-black px-5 py-3'>He-H Laser Pointer</h1>
        <div className='flex justify-center items-center'>
        <h3 className='text-black px-2 py-5'>Color:</h3>
          <ColorPicker />
        </div>

        <FileUpload image={inputImage} setImage={setInputImage} />

      </div>

    </section>
  )
}



export default Configurator