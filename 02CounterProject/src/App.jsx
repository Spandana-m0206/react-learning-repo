import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
//  let countValue=15

// hooke function to update value in the ui
//usreState return a array of two things
//at 0th index variable and at 1st index function which controls the state of that variable
 let [countValue,setCountValue]=useState(0)
  const addValue=()=>{
   if(countValue<20){
    countValue=countValue+1
   }
   console.log("clicked on add",countValue)
   setCountValue(countValue)
  }
 const removeValue=()=>{
  if(countValue>0){
    countValue=countValue-1
  }
  console.log("clicked on remove",countValue)
  setCountValue(countValue)
 }
  return (
    <>
      <h1>count value: {countValue}</h1>
    {/* why the parantese not used here ? => if we use paranthese it gets executed as the component renders ,instead of being executed when the button is clicked 
    by writing addValue() directly ,we are invoking the function immediately and asssigning its return value to the onclick */}

    {/* if we need to pass the arguement we need to wrap the function inside the arrow function name
     <button onClick={()=>addValue(10)}>increase count by 10</button> */}
      
    
      <button onClick={addValue}>increase Count</button> <span> </span>
      <button onClick={removeValue}>decrease Count</button>
      
    </>
  )
}

export default App
