"use client";

import { useModelContext } from '../contexts/ModelContextProvider'
import { useSimulationContext } from '../contexts/SimulationContextProvider';

// consume simulation context to get filter setter
const Upload = () => {
  // const [file, setFile] = useState<File>();
  const {inputImage, setInputImage} = useSimulationContext()
  const { setInputModel } = useModelContext()

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setFile(e.target.files?.[0]);
    setInputImage(e.target.files ?  e.target.files[0] : null)
    
  }

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!inputImage) {
      return
    }

    try {
      const data = new FormData()
      data.set('file', inputImage)
      const API_URI = 'http://127.0.0.1:5000/api/input'
      const res = await fetch(API_URI, { method: 'POST', body: data })
      console.log('response', res)
      setInputModel(await res.blob())
    } catch (e: any) {
      console.log(e)
    }
  }


  return (
    <section>
      <form onSubmit={handleOnSubmit}>
        <input type='file' className="block w-full mb-5 text-xs text-gray-900 border border-gray-300 
        rounded-lg cursor-pointer bg-gray-50 focus:outline-none" onChange={handleOnChange} />
        <button type='submit' className='bg-purple-500'>click me</button>
      </form>
    </section>
  )
}

export default Upload