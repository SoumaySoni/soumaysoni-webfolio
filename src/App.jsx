import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FullPagePortfolio from './FullPagePortfolio.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FullPagePortfolio />
    </>
  )
}

export default App
