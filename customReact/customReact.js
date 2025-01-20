//here basicaly we gonna see how react is working behind the scenes
//create a object includes : type,props,children

//function definition
function customisedRendering(customElement,container){
    const domElement=document.createElement(customElement.type)
    domElement.innerHTML=customElement.children
    // domElement.setAttribute('href',customElement.props.href)
    // domElement.setAttribute('target',customElement.props.target)
    
    //what if there are many attributes and we should use loop 
    for (const prop in customElement.props) {
         if(prop==='children'){ continue};
         //objecr[key]=value
        domElement.setAttribute(prop,customElement.props[prop])
    }
    container.appendChild(domElement)
}
const customElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'Click here to open google'
}
const mainContainer=document.getElementById('root')


customisedRendering(customElement,mainContainer)