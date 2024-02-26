import React, { useEffect, useState } from 'react'

type FileUploadProps = {
  image: File | null
  setImage: React.Dispatch<React.SetStateAction<File | null>>,
}
const FileUpload: React.FC<FileUploadProps> = ({ image, setImage }) => {
  const [imageURL, setImageURL] = useState<string | null>(null);
  
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

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0])
    }
  } 

  return (
    <section className="flex flex-col items-center justify-center h-full w-full">
      <div className="flex flex-col items-center">
        <input
          type="file"
          onChange={handleOnChange}
          className="border-2 border-gray-300 rounded-md px-3 py-2 text-sm"
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