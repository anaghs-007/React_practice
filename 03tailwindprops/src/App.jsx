import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '../components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-teal-600 text-black p-4 rounded-b-xl outline-amber-400 outline-1 '>Tailwind Test</h1>
      <Card prodname="Product One" btnText="Click Me" />
      <Card prodname='Product 2' />
    </>
  )
}

export default App
