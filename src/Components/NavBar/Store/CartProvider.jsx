import CartContext from "./cart-context";
import { useState } from "react";



const CartProvider = (props) =>{
const [cart,setCart] = useState([])
const addItemToCartHandler = (item,id,unit) => {

    const existingCartItemInTheCart = cart.findIndex((cartItem)=> cartItem.id === id)
    console.log(existingCartItemInTheCart);
    if(existingCartItemInTheCart !== -1){
        const updatedCart = [...cart];
        updatedCart[existingCartItemInTheCart].unit += 1;
        setCart(updatedCart)
    }else {
        // Item not in cart, add it with the provided unit
        setCart((prevCart) => [...prevCart, { ...item, unit: unit }]);
    }
}
const removeItemFromCartHandler = (id) => {
    setCart((prevCart)=>{
      const  updatedCart =  prevCart.map((item)=>{
            if(item.id === id){
                const updatedUnit = Number(item.unit - 1);
                return{
                    ...item,
                    unit: updatedUnit 
                } 
            }
            return item;
        })
        setTimeout(()=>{
            const filteredCart = updatedCart.filter((item)=>item.unit > 0);
            setCart(filteredCart) ;
        },300);

        return updatedCart;
    })
}
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

    return <CartContext.Provider value={cartContext} >
        {props.children}
    </CartContext.Provider>
}
export default CartProvider;