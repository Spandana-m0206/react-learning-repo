import profilePic from "./assets/dreamedp.webp"

function Card(){
    return(
        <div className="card">
        <img src={profilePic} alt="Confused Brain" className="profile-pic"/>
        <h2 className="card-title">
            My Peace
        </h2>
        <p className="card-text">
            hello I am spandana , and I am coming back to the field again , welcome me please , love you all truely
        </p>
        
        </div>
    );
}
export default Card;