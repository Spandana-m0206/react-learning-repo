
//today we revise prompt 
function Student({name="guest",age=0,isStudent=false}){
    return(
        <div className="student">
                <h2>Name: {name}</h2>
            <h2>Age: {age}</h2>
            <h2>Student: {isStudent?"Yes":"No"}</h2>
        </div>
    );
}
 
export default Student;