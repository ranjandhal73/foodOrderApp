import { useState } from 'react'
import Navbar from './Components/NavBar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
    </>
  )
}

export default App
