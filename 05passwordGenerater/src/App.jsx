
import { useCallback, useEffect, useState, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength]= useState(8)
  const [number, setNumber]= useState(false)
  const [character, setcharacter]= useState(false)
  const [password, setPassword]= useState("")
  const passwordRef = useRef(null)

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

  const copyToClipboard = useCallback(()=>{
      passwordRef.current?.select()
      window.navigator.clipboard.writeText(password)
  }, [password])

 
  useEffect(()=>

    {generatePassword()

    }, [length,number, character, generatePassword])

  return (
      

    <>
    
      <div className='bg-gray-400 text-white h-100 flex flex-col items-center justify-center gap-5'>
        <h2 className='text-3xl'>Password Generator</h2>
        <div>
          <input type="text" value={password} readOnly className='bg-white text-black w-100' ref={passwordRef} placeholder='Password'/>
        
          <button className='text-white bg-blue-500 w-25' onClick={copyToClipboard}>Copy</button>
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
