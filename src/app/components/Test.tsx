"use client"
import React, { useEffect, useState } from 'react'

import { useModelContext } from "../contexts/ModelContextProvider";
import Model from "../models/Model";


const Test = () => {
  const { inputModel } = useModelContext()
  const [inputModelURL, setInputModelURL] = useState("")
  
  // console.log('BLOB', inputModel)
  // console.log('URL', inputModelURL)

  useEffect(() => {
    if (inputModel) {
      setInputModelURL(URL.createObjectURL(inputModel))
    }

    return () => { 
      if (inputModelURL.length > 0) {
        URL.revokeObjectURL(inputModelURL) 
      }
    }
  }, [inputModel])

  return (
    <>
      { inputModelURL.length > 0 ? <Model file={inputModelURL}/> : null }  
    </>
  )
}

export default Test