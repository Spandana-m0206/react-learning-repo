import { useState } from 'react'
import Student from './Student'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Student name="Pranam" age={26} isStudent={true}/>
    <Student />
    </>
  )
}

export default App
