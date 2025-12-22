import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="font-extrabold text-4xl p-4 font-serif flex justify-center top-3">
        <div className="flex flex-wrap justify-center bg-white rounded-xl px-4 py-3">Background Color Changer</div>
      </div>
      <div className="fixed flex flex-wrap justify-center h-10 bottom-10 inset-x-0 px-1 ">
        <div className="flex flex-wrap justify-center gap-5 shadow-lg bg-white px-4 py-2 rounded-2xl">
          <button className="bg-red-500 font-bold rounded-xl px-4 py-1"
            onClick={()=>setColor("red")}>
            Red</button>
          <button className="bg-blue-400 font-bold rounded-xl px-4 py-1"
            onClick={()=>setColor("#50a2ff")}>
            Blue</button>
          <button className="bg-green-400 font-bold rounded-xl px-4 py-1"
            onClick={()=>setColor("#05df72")}>
            Green</button>
          <button className="bg-yellow-400 font-bold rounded-xl px-4 py-1"
            onClick={()=>setColor("#fdc700")}>
            Yellow</button>
          <button className="bg-purple-200 font-bold rounded-xl px-4 py-1"
            onClick={()=>setColor("#e9d4ff")}>
            Lavender</button>
          <button className="bg-pink-500 font-bold rounded-xl px-4 py-1"
            onClick={()=>setColor("#f6339a")}>
            Pink</button>
        </div>
      </div>
    </div>
  )
}

export default App
