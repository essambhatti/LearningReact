import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0)
  function Addcount(){
     if (count===20) pass
    else setCount(count+1)
  }
  function Removecount(){
    if (count===0) pass
    else setCount(count-1)
  }

 
  return (
    <>
      <h1>React Counter</h1>
      <p>Count is {count}</p>
      <button onClick={Addcount}>Increase Count {count}</button>
      <button onClick={Removecount} >Decrease Count {count}</button>
    </>
  )
}

export default App
