

//every Function recieves a default arguement that is props 
//props contains requiored information
function Card({userName="john doe",userDescription="user left it"}){
    // console.log("props",props)
    console.log(userName, userDescription)
    return (        
<a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 m-5">

<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">WELCOME {userName}</h5>
<p className="font-normal text-gray-700 dark:text-gray-400">share ur thoughts: {userDescription}</p>
</a>
         )
}

export default Card