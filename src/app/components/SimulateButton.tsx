import React from 'react'
import { useSimulationContext } from '../contexts/SimulationContextProvider'
import axios from 'axios'

const SimulateButton = () => {
  const { inputImage, filterImage } = useSimulationContext()
  const handleOnClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    
    if (!inputImage) {
      return
    }
    
    try {
      const data = new FormData()
      data.set('file', inputImage)
      // data.set('file2', filterImage)

      const API_URI = 'http://127.0.0.1:5000/api/analysis'
      
      const res = await axios.post(API_URI, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })

      console.log('response', res)
    } catch (e: any) {
      console.log(e)
    }
  }



  return (
    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 
    font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none" onClick={handleOnClick}>Default</button>
  )
}

export default SimulateButton