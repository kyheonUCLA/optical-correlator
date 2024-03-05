import { useState, useContext, createContext } from "react";
import type { ActiveModelType } from "../utils/types"; 

type ModelContextType = {
  inputModelUrl: string,
  setInputModelUrl: React.Dispatch<React.SetStateAction<string>>,
  filterModelUrl: string,
  setFilterModelUrl: React.Dispatch<React.SetStateAction<string>>,
  outputModelUrl: string,
  setOutputModelUrl: React.Dispatch<React.SetStateAction<string>>,
  activeModel: ActiveModelType | null
  setActiveModel: React.Dispatch<React.SetStateAction<ActiveModelType | null>>
}

const ModelContext = createContext<ModelContextType | null>(null)

type ModelContextProviderProps = { children: React.ReactNode }
const ModelContextProvider: React.FC<ModelContextProviderProps> = ({ children }) => {
  const [inputModelUrl, setInputModelUrl] = useState<string>("")
  const [filterModelUrl, setFilterModelUrl] = useState<string>("")
  const [outputModelUrl, setOutputModelUrl] = useState<string>("")

  const [activeModel, setActiveModel] = useState<ActiveModelType | null>(null)


  return (
    <ModelContext.Provider value={{ 
      inputModelUrl, setInputModelUrl,
      filterModelUrl, setFilterModelUrl,
      outputModelUrl, setOutputModelUrl,
      activeModel, setActiveModel,
      }}>
      { children }
    </ModelContext.Provider>
  )
}


const useModelContext = () => {
  const context = useContext(ModelContext)
  if (!context) {
    throw new Error("ModelContext must be consumed inside a ModelContextProvider block")
  }
  return context
}

export default ModelContextProvider
export { useModelContext }