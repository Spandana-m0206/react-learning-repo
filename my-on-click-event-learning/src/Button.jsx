// onClick event=An interaction when a user clicks on a specific element .we can respond to clicks by passing a callback to the onclick event handler(its in the tag)
function ButtonSp(){
    let count=0;

    const handleClick=()=>{
        console.log("Hey I am clicked ")
    }
    const handleClick2=(name)=>{
        if(count<5){
            count++
            console.log(`${name} clicked  ${count} times`)
        }
        else{
            console.log("stop clicking me")
        }
    }

    return (
        <button onClick={()=>handleClick2("spandy")}>Click Me😉</button>
    );
}
export default ButtonSp;