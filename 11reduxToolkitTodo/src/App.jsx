import { useState } from 'react'
import AddTodo from './components/AddTodo.jsx'
import './App.css'
import Todos from './components/Todos'

function App() {

  return (
    <>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App
