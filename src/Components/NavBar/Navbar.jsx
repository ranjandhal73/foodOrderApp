import { BsCart2 } from "react-icons/bs";
import Meals from "./Meals/Meals";
import CartContext from "./Store/cart-context";
import { useContext,useState } from "react";

function Navbar({onShowCart}){
    // useState(0)
    const totalItem = useContext(CartContext)
    return(
        <div className='pb-10' style={{backgroundColor: '#383838'}}>
                <header className=" flex items-center justify-between py-4 px-40 bg-red-800 text-white">
                    <h1 className="text-4xl">Happy Meals <span className=" text-4xl">☺️</span></h1>
                    <button onClick={onShowCart}
                    className="px-5 py-2 rounded-full flex gap-2 items-center cursor-pointer text-2xl" style={{backgroundColor: '#4d1601'}}>
                        <div className="text-2xl">
                            <BsCart2 />
                        </div>
                        <h3>Your Cart <span className="bg-red-800 bg-opacity-60 px-3 rounded-full text-center">{totalItem.items.length}</span></h3>                      
                    </button>
                </header>
                <div style={{backgroundImage:`url('https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=600')`,
                              height: '250px', // Set a height for the div
                              width: '100%',
                              backgroundSize: 'cover',
                              backgroundPosition: 'center',
                            //   backgroundRepeat: 'no-repeat',
                            }}>                               
                </div>
            <Meals  />

            
        </div>
    )
}

export default Navbar;