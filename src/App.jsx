import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class= "box">
        <h1>hello World</h1>
        <h2>this is the third task</h2>
        <p>Done with the day</p>
      </div>
      <button>Done</button>
      
    </>
  )
}

export default App
