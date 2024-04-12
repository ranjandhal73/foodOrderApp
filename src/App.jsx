import { useState } from 'react'
import Navbar from './Components/NavBar/Navbar'
import Cart from './Components/NavBar/Cart/Cart'

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false)

  const showCartModal = ()=>{
    setIsCartOpen(true)
  }

  const hideCartModal = ()=>{
    setIsCartOpen(false)
  }

  return (
    <>
    {isCartOpen && <Cart onHideCart={hideCartModal}/>}
      <Navbar onShowCart={showCartModal}/>
    </>
  )
}

export default App
