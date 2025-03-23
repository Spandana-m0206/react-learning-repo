function Button(){
    // the onClick event function can take a event=>'e' as an arguement automatiaclly lets go through it 
    const eventHandler=(e)=>{
        console.log(e)
    }
    const changeName=(e)=>{
        if(e.target.innerText=="Click Me😎"){
            e.target.innerText="Ouch 🤕"
        }else{
            e.target.innerText="Click Me😎"
        }
    }
    //using media
    return(
    <button onClick={(e)=>changeName(e)}>Click Me😎</button>
    );
}

export default Button;