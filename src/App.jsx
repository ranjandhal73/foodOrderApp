import { useState } from 'react'
import Navbar from './Components/NavBar/Navbar'
import Cart from './Components/NavBar/Cart/Cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Cart />
      <Navbar />
    </>
  )
}

export default App
