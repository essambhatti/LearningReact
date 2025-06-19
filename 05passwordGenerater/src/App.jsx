
import { useCallback, useEffect, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength]= useState(8)
  const [number, setNumber]= useState(false)
  const [character, setcharacter]= useState(false)
  const [password, setPassword]= useState("")

  const generatePassword = useCallback(()=>{

    let pass = ''
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (number) str+='0123456789'
    if (character) str+=`!"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~`
    for (let i = 1; i <= length; i++){
    let  randomIndex = Math.floor(Math.random() * str.length);
     pass +=str.charAt(randomIndex)    
    }
    setPassword(pass)

  }, [length, number, character])

 
  useEffect(()=>

    {generatePassword()

    }, [length,number, character, generatePassword])

  return (
      

    <>
    
      <div className='bg-gray-400 text-white h-100 flex-col items-center justify-center '>
        <h2>Password Generator</h2>
        <div>
          <input type="text" value={password} readOnly className='bg-white text-black' placeholder='Password'/>
        
          <button className='text-white bg-blue-500 w-25' >Copy</button>
        </div>
        <div>
        <input type='range' min={6} max={100} onChange={(e)=>{setLength(parseInt(e.target.value))}} value={length}/><p>Length {length}</p>
        <input type="checkbox" checked={number} onChange={(e)=>{setNumber((prev)=>!prev)}} />Numbers
        <input type="checkbox" checked={character} onChange={() => setcharacter((prev) => !prev)}/>Characters
        </div>
      </div>
    </>
  )
}

export default App
