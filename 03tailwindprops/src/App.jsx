import './App.css'
import Card from './componemts/card'

function App() {


  return (
    <>
    <h1 className = "bg-green-400 text-white p-4 rounded-xl mb-4" >
      Hello World
    </h1>
    <Card heading='First card' />
    <Card heading='Second Card'btntxt='Learn More'/>
    <Card heading='Third Card' btntxt='Read More'/>
    
    </>)
  
}

export default App
