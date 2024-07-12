import { useCallback, useEffect, useRef, useState } from 'react'


function App() {
  const [length,setLength] = useState(8)
  const [isnum, setIsnum] = useState(false)
  const [ischar,setIschar] = useState(false)
  const [password, setPassword] = useState("")
  const passwordRef = useRef(null)
  const passwordGenerator = useCallback(()=>{
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let pass = ""

    if(isnum) str+="1234567890"
    if(ischar) str+="@#$%~!^*><?"


    for (let i = 0; i <length; i++) {
      let char = Math.floor(Math.random() * str.length +1)
      pass+=str.charAt(char)
      
    }
    setPassword(pass)
    
  },[length,isnum,ischar,setPassword])
  
const CopyPassword = useCallback(()=>{
  passwordRef.current?.select()
  window.navigator.clipboard.writeText(password)
},[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,isnum,ischar,passwordGenerator])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-700 text-orange-500'>
        <h1 className='text-center text-white my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'> 
            <input
              type='text'
              value={password}
              className='outline-none w-full py-1 px-3'
              placeholder='password'
              readOnly
              ref={passwordRef}
            />
            <button className='shrink-0 outline-none bg-blue-600 text-white px-3 py-1'
            onClick={CopyPassword}>
              Copy
            </button>
        </div>
        <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
                <input
                  type='range'   
                   min={6} 
                   max={20}
                   value={length} 
                   className='cursor-pointer'
                   onChange={(e) => {setLength(e.target.value)}}        
                />
                <label>Length : {length}</label>
            </div>
            <div className='flex items-center gap-x-1'>
                <input
                  type='checkbox'
                  defaultChecked ={isnum}
                  id='numberInput'
                  onChange={() =>{
                    setIsnum((prev) => !prev)
                  }}
                />
                <label>Number</label>

            </div>
            <div className='flex items-center gap-x-1'>
                <input
                  type='checkbox'
                  defaultChecked ={ischar}
                  id='charInput'
                  onChange={() =>{
                    setIschar((prev) => !prev)
                  }}
                />
                <label>Special Character</label>

            </div>
        </div>
      </div>
    </>
  )
}

export default App
