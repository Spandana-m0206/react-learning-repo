 
function Button(){
    //inline css
    // done through object
    const styles={
        backgroundColor:" rgb(77, 77, 227)",
    color: "white",
    padding:"10px 20px",
    borderRadius:"5px",
    border: "none",
    cursor: "pointer",
    }
    return(
        <button style={styles}>Click Me</button>
    );
    // className={styles.btn}
}
export default Button