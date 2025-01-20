import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
const customElement=(
  <a href="https://google.com" target="_blank">click me</a>
)
const customElementInReact=React.createElement('a',{href:"https://google.com",target:"_self"},"secondLink fore google")


// here render takes function wrapped in jsx or react element
createRoot(document.getElementById('root')).
render(
  // customElement
  // customElementInReact

<App/>
 
  // App() --> this works but we suggest not to use

)
