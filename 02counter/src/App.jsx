import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0)
  function Addcount(){
    setCount(count+1)
  }
  function Removecount(){
    setCount(count-1)
  }

 
  return (
    <>
      <h1>React Counter</h1>
      <p>Count is {count}</p>
      <button onClick={Addcount}>Increase Count</button>
      <button onClick={Removecount} >Decrease Count</button>
    </>
  )
}

export default App
