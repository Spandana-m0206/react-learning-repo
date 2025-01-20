import { useState } from 'react'
 import Hello from "./hello"


function App() {
 //using javascript varial it should be evaluated
  const messageToMyself="Never Stop Learning And Improving ,U got it I am with u bbg"
  return (
    <>
    <Hello/>
    <h2>{messageToMyself}</h2>
         <p>hello I mark this as the start of my react journey less goo</p>
         </>
  )
}

export default App
