import React from 'react'
import './App.css'
import { useState } from 'react'


function App() {
  const [color, setColor]= useState('olive')


  return (

    <div className="w-full h-screen duration-200" style={{backgroundColor : color}}>
      <div className="w-full h-20 flex items-center justify-center gap-4"  style={{backgroundColor: "black"}}>

        <div className='bg-blue-600 text-white h-7 w-15 text-center rounded' ><button onClick={()=>(setColor('blue'))}>Blue</button>
        </div>
        <div className='bg-green-600 text-white h-7 w-15 text-center rounded' ><button onClick={()=>(setColor('green'))}>Green</button>
        </div>
        <div className='bg-red-600 text-white h-7 w-15 text-center rounded' ><button onClick={()=>(setColor('red'))}>Red</button>
        </div>
        <div className='bg-yellow-400 text-white h-7 w-15 text-center rounded' ><button onClick={()=>(setColor('yellow'))}>Yellow</button>
        </div>
        <div className='bg-pink-600 text-white h-7 w-15 text-center rounded' ><button onClick={()=>(setColor('pink'))}>Pink</button>
        </div>
        <div className='bg-orange-600 text-white h-7 w-15 text-center rounded' ><button onClick={()=>(setColor('orange'))}>Orange</button>
        </div>
      </div>
    </div>
     

  )
}

export default App
