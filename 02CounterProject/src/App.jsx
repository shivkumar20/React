import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)
  const AddCount = () =>{
    if(count <10){

      setCount(count+1)
    }
    else{
      console.log("you cant add now bcoz value is 10");
    }
  }
  const MinusCount = () =>{
    if(count>0){

      setCount(count-1)
    }
    else{
      console.log("you cant minus now because count is 0");
    }
  }
  return (
    
    <>
      <h1>Counter Project</h1>
      <h2>Counter value  : {count}</h2>
      <button
      onClick={AddCount}>Add Value: {count}</button>
      <br/>
      <br/>
      <button 
      onClick={MinusCount}>Minus Value: {count}</button>
    </>
  )
}

export default App
