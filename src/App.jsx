import { useState } from 'react'
import favicon from '/favicon.svg'
import './index.css'

import Navigation from './components/Navigation'
import GridContainer from './components/GridContainer'


function App() {

  return (
    <>
      <Navigation />
      <GridContainer />
    </>
  )
}


export default App
