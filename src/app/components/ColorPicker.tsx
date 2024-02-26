import React, { useState } from "react"
import { useSimulationContext } from "../contexts/SimulationContextProvider"

const ColorPicker: React.FC = () => {
  const { color, setColor } = useSimulationContext()

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value)
  }

  return (
    <section className='flex flex-col items-center justify-center bg-black rounded-sm h-7 w-8'>
      <input type='color' id='color-picker' onChange={handleColorChange} className='h-0 w-0 opacity-0'/>
      <section className='relative flex justify-center'>
        <label htmlFor='color-picker'>
        <div style={{backgroundColor: color}} className='w-6 absolute h-5 rounded-sm'/>
        <div style={{backgroundColor: color}} className='w-6 blur-md opacity-50 h-5 rounded-sm'/>
        </label>
      </section>
      {/* <button className='text-gray-400 mt-1 text-sm w-auto boder px-2 py-1 rounded-xl hover:bg-white
      transition-colors hover:border-black hover:text-gray-700'>{ color }</button> */}
    </section>
  )
}
export default ColorPicker