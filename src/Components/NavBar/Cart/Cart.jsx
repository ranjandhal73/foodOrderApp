
import Modal from "../UI/Modal";

const Cart = ({onHideCart}) => {
  const cartItems = [{ id: 1, name: "Biriyani", quantity: 2, price: 119 }].map(
    (item) => {
      return <p key={Math.random()}>{item.name}</p>;
    }
  );

  return (
    <div>
      <Modal onClose={onHideCart}>
        {cartItems}
        
        <div className="flex justify-between items-center font-bold text-lg md:text-xl my-4">
          <span>Total Amount</span>
          <span>119</span>
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
