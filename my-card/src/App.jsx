import { useState } from 'react'
import Button from "./Button"
import Card from "./Card"
 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Card/>
     <Card/>
     <Card></Card>
     <Button></Button>
    </>
  )
}

export default App
