import { useState } from 'react'
 



function App() {
  const [color,setColor]=useState("#84A59D")

  // const changeBgColor=(bgColor)=>{
  //   setColor(bgColor)
  // }
  return (
    <div className='w-full h-screen static'
    style={{
      backgroundColor:color
    }}
    >
    
    <div className='absolute bottom-3 translate-x-[20%] w-[70%] bg-slate-300 flex flex-wrap place-content-around p-4 rounded-full'>
       <button onClick={()=>setColor('#FF74D4')}  className='p-4 font-serif text-sm font-semibold rounded-full'
       style={{
        backgroundColor:'#FF74D4'
       }}
       >pink</button>
       <button onClick={()=>setColor('#56351E')}  className='p-4 font-serif text-sm font-semibold rounded-full'
       style={{
        backgroundColor:'#56351E'
       }}>brown</button>
       <button onClick={()=>setColor('#A1CDF4')}  className='p-4 font-serif text-sm font-semibold rounded-full'
       style={{
        backgroundColor:'#A1CDF4'
       }}>blue</button>
       <button onClick={()=>setColor('#38A700')}  className='p-4 font-serif text-sm font-semibold rounded-full'
       style={{
        backgroundColor:'#38A700'
       }}>green</button>
       <button onClick={()=>setColor('#C3ACCE')}  className='p-4 font-serif text-sm font-semibold rounded-full'
       style={{
        backgroundColor:'#C3ACCE'
       }}>lavender</button>
       <button onClick={()=>setColor('#2A2B2A')}  className='p-4 font-serif text-sm font-semibold rounded-full'
       style={{
        backgroundColor:'#2A2B2A'
       }}>black</button>
      </div>
    
    </div>
  )
 
}

export default App
