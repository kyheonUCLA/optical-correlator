import { useState, useContext, createContext, useRef } from "react";
import type { ActiveModelType } from "../utils/types"; 

type ModelContextType = {
  inputModelUrl: string,
  setInputModelUrl: React.Dispatch<React.SetStateAction<string>>,
  filterModelUrl: string,
  setFilterModelUrl: React.Dispatch<React.SetStateAction<string>>,
  outputModelUrl: string,
  setOutputModelUrl: React.Dispatch<React.SetStateAction<string>>,
  activeModel: ActiveModelType | null
  setActiveModel: React.Dispatch<React.SetStateAction<ActiveModelType | null>>,
  addModelRef: (key: string, value: React.RefObject<any>) => void,
  getModelRef: (key: string) => React.RefObject<any>,
}

const ModelContext = createContext<ModelContextType | null>(null)

type ModelContextProviderProps = { children: React.ReactNode }
const ModelContextProvider: React.FC<ModelContextProviderProps> = ({ children }) => {
  const [inputModelUrl, setInputModelUrl] = useState<string>("")
  const [filterModelUrl, setFilterModelUrl] = useState<string>("")
  const [outputModelUrl, setOutputModelUrl] = useState<string>("")

  const [activeModel, setActiveModel] = useState<ActiveModelType | null>(null)
  const [modelRefs, setModelRefs] = useState<Record<string, React.RefObject<any>>>({})
  
  const addModelRef = (key: string, value: React.RefObject<any>) => {
    setModelRefs(prevRefs => ({ ...prevRefs, [key]: value }));
  };

  const getModelRef = (key: string) => {
    if (key in modelRefs) {
      return modelRefs[key]
    } else {
      throw new Error(`the key '${key}' does not exist in modelRef hashtable`)
    }
  }

  return (
    <ModelContext.Provider value={{ 
      inputModelUrl, setInputModelUrl,
      filterModelUrl, setFilterModelUrl,
      outputModelUrl, setOutputModelUrl,
      activeModel, setActiveModel,
      addModelRef, getModelRef
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