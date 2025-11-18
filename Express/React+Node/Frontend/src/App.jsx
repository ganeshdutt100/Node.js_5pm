import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [msg, setMsg] = useState("")
  useEffect(() => {
    fetch("http://localhost:3000/api/message")
      .then((res) => res.json())
      .then((data) => setMsg(data.message))
  }, [])

  return (
    <>
      <h1>React + Express.js</h1>
      <p>{msg}</p>
    </>
  )
}

export default App
