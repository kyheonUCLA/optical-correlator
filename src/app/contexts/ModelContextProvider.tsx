import { useState, useContext, createContext } from "react";
import type { ActiveModelType } from "../utils/types"; 

type ModelContextType = {
  inputModel: Blob | null,
  setInputModel: React.Dispatch<React.SetStateAction<Blob | null>>,
  filterModel: Blob | null,
  setFilterModel: React.Dispatch<React.SetStateAction<Blob | null>>,
  outputModel: Blob | null,
  setOutputModel: React.Dispatch<React.SetStateAction<Blob | null>>,
  activeModel: ActiveModelType | null
  setActiveModel: React.Dispatch<React.SetStateAction<ActiveModelType | null>>
}

const ModelContext = createContext<ModelContextType | null>(null)

type ModelContextProviderProps = { children: React.ReactNode }
const ModelContextProvider: React.FC<ModelContextProviderProps> = ({ children }) => {
  const [inputModel, setInputModel] = useState<Blob | null>(null)
  const [filterModel, setFilterModel] = useState<Blob | null>(null)
  const [outputModel, setOutputModel] = useState<Blob | null>(null)

  const [activeModel, setActiveModel] = useState<ActiveModelType | null>(null)


  return (
    <ModelContext.Provider value={{ 
      inputModel, setInputModel,
      filterModel, setFilterModel,
      outputModel, setOutputModel,
      activeModel, setActiveModel 
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