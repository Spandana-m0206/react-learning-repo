

function PhotoExp(){
//    const imageUrl="PhotoGirl"
   let imageUrl="./src/assets/fav2.webp"
   const eventHandler=(e)=>{
      
    console.log(e)
   // imageUrl=imageUrl=="./src/assets/fav2.webp"?"./src/assests/trythis.jpg":"./src/assets/fav2.webp"
   // console.log("changed")
   if(e.target.style.opacity=="0.5"){
      e.target.style.borderRadius="90%"
   e.target.style.opacity="1"
   }else{
   e.target.style.borderRadius="50%"
   e.target.style.opacity="0.5"
   }

   }
   return (
    <img onClick={(e)=>eventHandler(e)} src={imageUrl}/>
   );
}
export default PhotoExp;