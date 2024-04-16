import CartContext from "./cart-context";
import { useState } from "react";



const CartProvider = (props) =>{
const [cart,setCart] = useState([])
const addItemToCartHandler = (item) => {
    setCart((prevCart)=>{
   return  [...prevCart,item]
})
}
const removeItemFromCartHandler = (id) => {}
let totalPrice = 0
cart.forEach((item)=>{
    totalPrice += Number(item.unit) * Number(item.amount);
})
const cartContext = {
    items: cart,
    totalAmount: totalPrice,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler
}
console.log(cartContext)
    return <CartContext.Provider value={cartContext} >
        {props.children}
    </CartContext.Provider>
}
export default CartProvider;