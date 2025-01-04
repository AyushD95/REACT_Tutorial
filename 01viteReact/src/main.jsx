import ReactDOM from 'react-dom/client'
import React from 'react'

import './index.css'
import App from './App.jsx'


const username= "Ayush D"
// Custom react element using createElement from react
const reactElement= React.createElement(
  'a',
  { href: "https//google.com", target: '_blank'},
  'Cick me to visit Google ',
  username
)


ReactDOM.createRoot(document.getElementById('root')).
render(

  reactElement
  // <App/>

)
