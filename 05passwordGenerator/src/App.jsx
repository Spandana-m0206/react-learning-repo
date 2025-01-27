import { useCallback, useEffect, useRef, useState } from 'react'
 
import './index.css'

function App() {
  //for every settings individual useState is being used
  const [length,setLength]=useState(10)
  const [numberAllowed,setNumberAllowed]=useState(false)
  const [charactesAllowed,setCharacterAllowed]=useState(false)
  //this is inside input ,we use useState on this too
  const [password,setPassword]=useState("")
  //callback is just for optimization 
  const generatePassword=useCallback(()=>{
       let password="";
       let str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
       if(numberAllowed){
        str+='0123456789'
       }
       if(charactesAllowed){
        str+='!@#$%&*^(){}[]'
       }
       for(let i=1;i<=length;i++){
        let charIndex=Math.floor(Math.random()*str.length)
        password+=str.charAt(charIndex)
       }
       setPassword(password)

  },[length,numberAllowed,charactesAllowed])
  //this for using it 
  useEffect(()=>{
    generatePassword()
  },[length,numberAllowed,charactesAllowed,generatePassword])
  //to copy the passworda along with ref effect
  const passwordRef=useRef(null)
  //useRef returns an object
  //so 'ref' attribute in the input element is set to passwordRef , so React will assign the DOM element of the input to password.current
  const copyThePasswordToClipBoard=()=>{
    passwordRef.current?.select()
    //to select the specific range
    //optional chaining operator ?.
    //it allows u to safely access the propertied=s or call the method on object without throwing error if its null or undefie=ned . instead it returns the undefined
    passwordRef.current?.setSelectionRange(0,99)
    window.navigator.clipboard.writeText(passwordRef.current.value)
    // alert('Password Copied!')
  }
  return (
<>
  <div className="w-full flex flex-col justify-center max-w-md mx-auto my-8 p-3 shadow-blue-700 rounded-lg font-serif" style={{ background: "#B5E2FA" }}>
    <h1 className='m-1.5 text-2xl font-bold'>Password Generator</h1>
    <div className="bg-white flex place-content-between rounded-2xl text-gray-200">
      <input
        className="w-[90%] bg-white rounded-xl p-1.5 text-black  focus:outline-none"
             
        type="text"
        value={password}
        placeholder="Password"
        readOnly
        // it binds the passwordRef to the input element , now passwordRef.current gives u access to the actual input dom element
        //this allows u to perform actions like focusing on the input , selecting the text 
        ref={passwordRef}
      />
      <button className="bg-blue-500 text-white rounded-xl p-1.5 hover:bg-blue-600"
      onClick={copyThePasswordToClipBoard}
      >Copy</button>
    </div>

    
    <div
      id="div1"
      className="w-full  mx-auto py-3 flex justify-center gap-4 m-4"
    >
      <div className="flex gap-2">
        <input
          type="range"
          min={6}
          max={20}
          value={length}
          className="cursor-pointer"
          onChange={(e) => {
            setLength(e.target.value);
          }}
        />
        <label htmlFor="">Length: {length}</label>
      </div>
      <div className="flex gap-2">
        <input
          type="checkbox"
          checked={numberAllowed}
          onChange={() => setNumberAllowed((current) => !current)}
        />
        <label htmlFor="">Number</label>
      </div>
      <div className="flex gap-2">
        <input
          type="checkbox"
          checked={charactesAllowed}
          onChange={() => setCharacterAllowed((current) => !current)}
        />
        <label htmlFor="">Characters</label>
      </div>
    </div>
  </div>
</>


  )
}

export default App
