import { useState } from 'react'


function App() {
  const [color, setColor] = useState("grey")

  return (
    <>
      <div className='w-full h-screen  ' style={{backgroundColor:color}}>
        <div className=' fixed flex flex-wrap justify-center bottom-16 inset-x-0 px-2' >
          <div className='fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl'>
            <button  onClick={ () => setColor("red")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor:"red"}}>
              Red
            </button>
            <button onClick={ () => setColor("green")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor:"green"}}>
              Green
            </button>
            <button onClick={ () => setColor("yellow")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor:"yellow"}}>
              Yellow
            </button>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
