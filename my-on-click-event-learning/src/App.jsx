import { useState } from 'react'
import ButtonSp from './Button' 
import Button from './ButtonEvent'
import PhotoExp from './Photo'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Button/>
     */}
    <PhotoExp/>
        </>
  )
}

export default App
