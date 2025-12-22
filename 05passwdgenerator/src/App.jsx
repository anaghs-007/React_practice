import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [inclNum, setinclNum]= useState(false)
  const [inclSym, setinclSym]= useState(false)
  const [password, setPassword]= useState("")

  //useRef hook
  const passwordRef= useRef(null)

  const passwordGenerator= useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(inclNum){
      str +="0123456789"
    }
    if(inclSym){
      str +="!@#$%^&*()[]{}_+~`"
    }
    for(let i=1; i<=length; i++){
      let char=(Math.random()*str.length +1)
      pass+= str.charAt(char)
    }
    setPassword(pass)

  }, [length, inclNum, inclSym, setPassword])

  const copyPasswordToClipBoard=useCallback(()=>{
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0, 3) 
    //Above line is when you want to select specific range of text in input field
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(()=>{
    passwordGenerator()
  }, [length, inclNum, inclSym, passwordGenerator])

  return (
    <>
    <div className='flex justify-center mt-4'>
        <h1 className="text-black text-3xl font-bold text-center bg-white rounded-md p-2">Password Generator</h1>
    </div>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg text-indigo-400 font-medium px-4 py-2 my-8 bg-gray-700">
      <div className='flex shadow rounded-lg overflow-hidden mt-4 mb-4'>
        <input type="text"
         value={password}
         className='outline-none w-full py-2 px-3 text-black bg-white'
         placeholder='Password'
         readOnly

         ref={passwordRef}
        />
        <button 
        onClick={copyPasswordToClipBoard}
        className='outline-none bg-emerald-300 text-black px-3 py-0.5 shrink-0 cursor-pointer hover:bg-emerald-400 active:bg-emerald-500'>
          Copy
        </button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range"
           min={6}
           max={100}
           value={length}
           className='cursor-pointer'
           onChange={(e)=>{setLength(e.target.value)}}
           />
          <label >Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={inclNum}
          id="numberInput"
          onChange={()=>{
            setinclNum((prev)=> !prev);
          }} 
          />
          <label htmlFor='numberInput'>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={inclSym}
          id="symbolInput"
          onChange={()=>{
            setinclSym((prev)=> !prev);
          }} 
          />
          <label htmlFor='symbolInput'>Symbols</label>
        </div>
      </div>
    </div>
    </>
  )
}
export default App