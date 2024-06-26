import React from 'react'
import { useSimulationContext } from '../contexts/SimulationContextProvider'
import axios from 'axios'
import { useModelContext } from '../contexts/ModelContextProvider'


// instead of this whole blob business i should host the files 
const SimulateButton = () => {
  const { inputImage, filterImage } = useSimulationContext()
  const { setOutputModelUrl, setInputModelUrl } = useModelContext()

  const handleOnClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    
    if (!inputImage) {
      return
    }
    
    try {
      const data = new FormData()
      data.set('file', inputImage)
      const API_URI = 'http://127.0.0.1:5000/api/create_output_model'
      const res = await fetch(API_URI, { method: 'POST', body: data })
      const jsonData = await res.json()
      console.log('output', jsonData)
      setOutputModelUrl(`${jsonData.url}?${Date.now()}`)
    } catch (e: any) {
      console.log(e)
    }
  }



  return (
    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 
    font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none" onClick={handleOnClick}>Run</button>
  )
}

export default SimulateButton