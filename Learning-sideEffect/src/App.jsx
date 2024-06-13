import { useState } from 'react'
import FetchDataComp from './components/FetchDataComp'
import MouseMovementComp from './components/MouseMovementCom'
import DocumentTitleComp from './components/DocumentTitleComp'
import './App.css'

function App() {
  

  return (
    <div>
     <FetchDataComp/> 
     <MouseMovementComp/>
     <DocumentTitleComp/>
    </div>
  )
}

export default App
