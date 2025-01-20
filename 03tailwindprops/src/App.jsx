import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  {/* <h1 className='bg-yellow-600 font-serif rounded-xl text-md p-3 m-4'>hello tailwind here</h1> */}

  {/* here we send props if its object use curly braces */}
  <button  className="text-3xl rounded-full w-16 h-16 flex items-center justify-center bg-blue-500 text-white">
  +
</button>

  <Card userName="Spandana" userDescription="its a nice sunny day"/>
  <Card userName="Spandy" userDescription="nice nice"/>
  <Card/>
    </> 
  )
}

export default App
