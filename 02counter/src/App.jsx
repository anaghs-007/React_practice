import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter]=useState(15)

  // let counter=5
  const addVal= ()=>{
    if(counter>=20) {
      alert("Counter cannot exceed 20")
      return
    }
    counter+=1
    setCounter(counter)
  }
  const decVal= ()=>{
    if(counter<=0) {
      alert("Counter cannot be less than 0")
      return
    }
    setCounter(counter-1)
  }

  return (
    <>
      <h1>Chai and React !!</h1>
      <h2> Counter Value: {counter}</h2>

      <button onClick= {addVal}>Add Value</button>
      <br />
      <button onClick={decVal}>Decrease Value</button>

    
    </>
  )
}

export default App
