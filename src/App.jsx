import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Apps from './components/Apps'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Apps/>
    </>
  )
}

export default App
