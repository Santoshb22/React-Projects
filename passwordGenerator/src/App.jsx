import React, { useCallback, useEffect, useState } from 'react'
import './App.css'
import MyPasswords from './Component/MyPasswords'


const App = () => {
  const [myPasswords, setMyPasswords] = useState([])
  const [password, setPassword] = useState("")
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)

  const generatePassword = useCallback(() => {
    let pass = ""

    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "<>?!@#$%^&*()+{}"

    for(let i = 1; i<= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char)
    }

    setPassword(pass);
  }, [length, setPassword, numberAllowed, charAllowed])


const handleAddPass =() => {
  generatePassword()
  setMyPasswords([...myPasswords,  password])
}

const handleClear = () => {
  setMyPasswords([]) 
}

  useEffect(() => {
    generatePassword()
  }, [length, numberAllowed, charAllowed, generatePassword])

  return (
    <div className='w-full max-w-lg rounded-md mx-auto shadow-lg py-4 mt-10 bg-violet-900 text-orange-600 font-mono'>
      <h1 className='text-white text-center'>Generate Password</h1>

      <div className="input flex shadow-md my-3 mx-4 rounded-md overflow-hidden">
        <input className='w-full outline-none px-2 py-1'
        type="text" 
        placeholder='Password'
        value={password}
        readOnly
        />
        <button className='bg-blue-700 text-white px-4 py-1 hover:font-bold hover:text-gray-900'
        onClick={handleAddPass}
        >Add</button>
      </div>

      <div className="pass-type mx-4 flex gap-4">
        <div className="range flex item-center">
          <input 
          type="range" min={6} max={20} value={length} 
          className='cursor-pointer'
          onChange={(e) => setLength(e.target.value)}
          />
          <label htmlFor="length">length: {length}</label>
        </div>

        <div className="numberAllow">
          <input
           type="checkbox" 
           defaultChecked={numberAllowed}
           onChange={(e) => {
            setNumberAllowed(prev => !prev)
           }}
          />
          <label htmlFor="Number">Number</label>
        </div>

        <div className="charAllow">
          <input 
          type="checkbox" 
          defaultChecked={charAllowed}
          onChange={(e) => {
            setCharAllowed(prev => !prev)
          }}
          />
          <label htmlFor="charAllowed">Special Character</label>
        </div>
      </div>
      
      {
  myPasswords.length > 0 ? (
    <>
      <MyPasswords passwords={myPasswords} />
      <div className="clear-btn text-end mx-4">
        <button
          className="bg-red-600 text-white px-2 py-1 rounded-md text-xs hover:font-bold hover:text-gray-900"
          onClick={handleClear}
        >
          clear all
        </button>
      </div>
    </>
  ) : (
    <MyPasswords passwords={myPasswords} />
  )
}


  
    </div>
  )
}

export default App