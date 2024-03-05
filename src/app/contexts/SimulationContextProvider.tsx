import { useState, useContext, createContext } from "react";



// have the current input/filter image data readily availiable as nparray
type SimulationContextType = {
  color: string,
  setColor: React.Dispatch<React.SetStateAction<string>>,
  inputImage: File | null,
  setInputImage: React.Dispatch<React.SetStateAction<File | null>>,
  filterImage: File | null,
  setFilterImage: React.Dispatch<React.SetStateAction<File | null>>,
}

const SimulationContext = createContext<SimulationContextType | null>(null)

type SimulationContextProviderProps = { children: React.ReactNode }
const SimulationContextProvider: React.FC<SimulationContextProviderProps> = ({ children }) => {
  const [color, setColor] = useState('#FF0000')
  const [inputImage, setInputImage] = useState<File | null>(null) //maybe have it point to double slit
  const [filterImage, setFilterImage] = useState<File | null>(null) //maybe have it point to default slit file
  
  return (
    <SimulationContext.Provider value={{ 
      color, setColor,
      inputImage, setInputImage,
      filterImage, setFilterImage
      }}>
      { children }
    </SimulationContext.Provider>
  )
}


const useSimulationContext = () => {
  const context = useContext(SimulationContext)
  if (!context) {
    throw new Error("SimulationContext must be consumed inside a SimulationContextProvider block")
  }
  return context
}

export default SimulationContextProvider
export { useSimulationContext }