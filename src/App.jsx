import { useState } from 'react'
import './App.css'
import Accordion from './Accordion'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-[100vw]'>
      <Accordion /> 
    </div>
  )
}

export default App
