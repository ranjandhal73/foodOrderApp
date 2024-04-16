import { useState } from 'react'
import Navbar from './Components/NavBar/Navbar'
import Cart from './Components/NavBar/Cart/Cart'
import CartProvider from './Components/NavBar/Store/CartProvider'

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false)

  const showCartModal = ()=>{
    setIsCartOpen(true)
  }

  const hideCartModal = ()=>{
    setIsCartOpen(false)
  }

  return (
    <CartProvider >
    {isCartOpen && <Cart onHideCart={hideCartModal}/>}
      <Navbar onShowCart={showCartModal}/>
    </CartProvider>
  )
}

export default App
