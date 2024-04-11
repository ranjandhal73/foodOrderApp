import Modal from "../UI/Modal";
import { useState } from "react";



const Cart = () =>{
    const cartItems = [{id:1, name: 'Biriyani', quantity: 2, price: 119}].map((item)=>{
        return(
            <p>{item.name}</p>
        )
    });
    console.log(cartItems.id);
    return(
        <Modal>
            {cartItems}
            <div className="flex justify-between items-center font-bold text-lg md:text-xl my-4">
                <span>Total Amount</span>
                <span>119</span>
            </div>
            <div className="text-right">
                <button className="font-inherit cursor-pointer bg-transparent border border-solid border-orange-600 py-2 px-8 rounded-full ml-4 text-orange-600">Close</button>
                <button className="font-inherit cursor-pointer bg-transparent border border-solid border-orange-600 py-2 px-8 rounded-full ml-4 bg-orange-600 text-white">Order</button>
            </div>
        </Modal>
    )
};

export default Cart;