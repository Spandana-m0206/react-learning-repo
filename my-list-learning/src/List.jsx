
function List(){
    // const fruits=["apple","banana","chiku","kiwi","coconut","grapes"];
    // fruits.sort();
    //lets create a object array
    // lets know how it is sorted unlike theregular array
    const fruits=[{id:1,name:"apple",calories:95},
        {id:2,name:"banana",calories:140},
        {id:3,name:"chiku",calories:69},
        {id:4,name:"kiwi",calories:102},
        {id:5,name:"coconut",calories:160},
        {id:6,name:"grapes",calories:40}];

        // const lowCalFruit=fruits.filter((fruit)=> fruit.calories<100);
        //comparing objects by nam eand arranging in lexicographically
        // fruits.sort((a,b)=>a.name.localeCompare(b.name)) //ascending
        // fruits.sort((a,b)=>b.name.localeCompare(a.name)) // reverse order
        // fruits.sort((a,b)=>a.calories-b.calories);// number ascending
        // fruits.sort((a,b)=>b.calories-a.calories)// number reversed

    const frutList=fruits.map(fruit=><li key={fruit.id}>{fruit.name}:&nbsp; <b>{fruit.calories}</b></li>)

    return (
        <ol>{frutList}</ol>
    );
    // return(fruits);
}

export default List;