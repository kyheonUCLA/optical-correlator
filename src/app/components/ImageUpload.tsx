import React, { useState } from 'react'
import { MdOutlineCloudUpload } from "react-icons/md";

type ImageUploadProps = {
  setModel: React.Dispatch<React.SetStateAction<Blob | null>>,
  apiUrl: string
}
const ImageUpload: React.FC<ImageUploadProps> = ({ setModel, apiUrl }) => {
  const [file, setFile] = useState<File>();

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) {
      return
    }
    try {
      const data = new FormData()
      data.set('file', file)
      
      const res = await fetch(apiUrl, { method: 'POST', body: data })
      console.log('response', res)
      setModel(await res.blob())
    } catch (e: any) {
      console.log(e)
    }
  }

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files?.[0]);
  }

  return (
    <section className='flex items-center justify-center'>
      <form className="w-52 flex flex-col items-center px-2 py-2 bg-white text-blue rounded-lg 
      shadow-lg tracking-wide border-2 border-black/10 border-dashed cursor-pointer 
      hover:text-gray-500" onSubmit={handleOnSubmit}>

        <MdOutlineCloudUpload size={100}/>
        <span className="mt-2 text-base uppercase leading-normal">Select a file</span>
        <button className="bg-indigo-600 w-full text-white border border-gray-300 rounded 
        font-semibold py-1 mx-2 hover:bg-indigo-500 text-center mt-1" type='submit'>Submit
        </button>
        <input type='file' className="hidden w-full h-full" onChange={handleOnChange}/>

      </form>
    </section>
  )
}

export default ImageUpload