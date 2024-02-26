import React from 'react'
import Header from '../components/Header'
import Configurator from '../components/Configurator'
import { Settings } from '@mui/icons-material'
import Controls from '../components/Controls'

const Overlay = () => {
  return (
    <>
      {/* <Header /> */}
      <Configurator />
      <Controls />
    </>
  )
}

export default Overlay