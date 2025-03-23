import { useState } from 'react'
import ListProp from './ListProp'

function App() {
  
 
  const fruits=[{id:1,name:"apple",calories:95},
    {id:2,name:"banana",calories:140},
    {id:3,name:"chiku",calories:69},
    {id:4,name:"kiwi",calories:102},
    {id:5,name:"coconut",calories:160},
    {id:6,name:"grapes",calories:40}];
    
  const vegetables=[{id:1,name:"carrot",calories:95},
    {id:2,name:"tomato",calories:140},
    {id:3,name:"potato",calories:69},
    {id:4,name:"shunti",calories:102},
    {id:5,name:"bellulli",calories:160},
    {id:6,name:"chilli",calories:40}];
    const animals=[];

  return (
    <>
      {fruits.length>0 &&  <ListProp itemList={fruits} category="Fruits"/>}
       {vegetables.length>0 && <ListProp itemList={vegetables} category="Vegetables"/>}
       <ListProp itemList={animals} category=""/>
     
       
    </>
  )
}

export default App
