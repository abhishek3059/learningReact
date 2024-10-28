import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <h1>This is custom created function</h1>
  )
}
const element = (<a href='http://www.google.com' target = '_blank'> Click me </a>)

createRoot(document.getElementById('root')).render(
  
   /*  MyApp()  custom created function
     <MyApp /> */  
     element
  
)
