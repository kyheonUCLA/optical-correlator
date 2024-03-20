import React, { useEffect, useState } from 'react'
import { useSimulationContext } from '../contexts/SimulationContextProvider';
import { useModelContext } from '../contexts/ModelContextProvider';

type FileUploadProps = {
  image: File | null
  setImage: React.Dispatch<React.SetStateAction<File | null>>,
}

const FileUpload: React.FC<FileUploadProps> = ({ image, setImage }) => {
  const [imageURL, setImageURL] = useState<string | null>(null);
  const {setInputModelUrl} = useModelContext()


  useEffect(() => { 
    if (image) {
      setImageURL(URL.createObjectURL(image))
    }

    return () => {
      if (imageURL) {
        URL.revokeObjectURL(imageURL);
      }
    }

  }, [image])

  const handleOnChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0])

      try {
        const data = new FormData()
        data.set('file', e.target.files[0] as File)
        const API_URI = 'http://127.0.0.1:5000/api/create_input_model' 
        const res = await fetch(API_URI, { method: 'POST', body: data })
        const jsonData = await res.json()
        console.log('input', jsonData)
  
        setInputModelUrl(`${jsonData.url}?${Date.now()}`)
      } catch (e: any) {
        console.log(e)
      }

    }
  } 

  return (
    <section className="flex flex-col items-center justify-center h-full w-full">
      <div className="flex flex-col items-center">
        <input
          type="file"
          onChange={handleOnChange}
          className="border-2 border-gray-300 rounded-md px-3 py-2 text-sm w-32"
        />
        <img
          src={imageURL ? imageURL : 'https://placehold.co/600x400'}
          alt="Image Preview"
          className="mt-4 w-32 h-32 object-cover rounded-md"
        />
      </div>
    </section>
  )
}

export default FileUpload