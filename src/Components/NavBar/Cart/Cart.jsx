
import { useContext } from "react";
import Modal from "../UI/Modal";
import CartContext from "../Store/cart-context";

const Cart = ({onHideCart}) => {
  const cartContext = useContext(CartContext);
  console.log(cartContext)
  const cartItems = cartContext.items.map((item)=>{
     return <li key={Math.random()}>{item.name} {item.amount} {item.unit}</li>
  })

console.log(cartItems);
  return (
    <div>
      <Modal onClose={onHideCart}>
        <ul>
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
