
import { useContext } from "react";
import Modal from "../UI/Modal";
import CartContext from "../Store/cart-context";

const Cart = ({onHideCart}) => {
  const cartContext = useContext(CartContext);

  const itemDecreamnetHandler = (itemId) =>{
    cartContext.removeItem(itemId);
  }

  const itemIncreamnetHandler = (item,itemId) =>{
    console.log("minus", itemId);
    console.log("minus", item);
    cartContext.addItem(item,itemId)
    }

  const cartItems = cartContext.items.map((item)=>{
     return (
        <div key={Math.random()} className="flex justify-between items-center shadow-md shadow-gray-400 px-3 py-3">
            <li>
              <div className="font-bold text-xl italic">{item.name} </div> 
              <div className="flex gap-10">
                <div className="text-red-700 font-semibold text-lg">Rs:{item.amount}</div>
                <div className="font-semibold text-lg">x {item.unit}</div>
              </div>
            </li>
            <div className="flex gap-2">
            <button onClick={()=>itemDecreamnetHandler(item.id)} className="px-3 py- border border-red-700 rounded-md text-red-700 text-lg hover:bg-red-700 hover:text-white">-</button>
            <button onClick={()=>itemIncreamnetHandler(item,item.id)} className="px-3 py- border border-green-700 rounded-md text-green-700 text-lg hover:bg-green-700 hover:text-white">+</button>
            </div>
       </div>
     )
  })

  return (
    <div>
      <Modal onClose={onHideCart}>
        <ul className="flex flex-col gap-2" >
        {cartItems}
        </ul>
        
        <div className="flex justify-between items-center font-bold text-lg md:text-xl my-4">
          <span>Total Amount:</span>
          <span>Rs:{cartContext.totalAmount}</span>
        </div>
        <div className="text-right">
          <button onClick={onHideCart}
            className="font-inherit cursor-pointer bg-transparent border border-solid border-orange-600 py-2 px-8 rounded-full ml-4 text-orange-600 hover:bg-orange-700 hover:text-white"
          >
            Close
          </button>
          <button className="font-inherit cursor-pointer bg-orange-700 border border-solid border-orange-600 py-2 px-8 rounded-full ml-4 text-white">
            Order
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Cart;
