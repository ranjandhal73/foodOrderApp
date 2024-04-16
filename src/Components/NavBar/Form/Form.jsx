import CartContext from "../Store/cart-context";
import { useContext, useState } from "react";


const Form = (props) =>{
    // console.log("Inside form props",props)
    const [unit, setUnit] = useState(1);
    const cartContext = useContext(CartContext)
    const addItemToCart = (e) =>{
        e.preventDefault();
        cartContext.addItem({...props.item, unit: unit})
    //    console.log(cartContext);
    }
    return(
            <div >
                <form>
                    <div className="flex">
                    <p className="font-bold">Unit:</p>
                    <input 
                        className=" border border-gray-400 w-12"
                        type="number" 
                        min='0'
                        name='unit'
                        value= {unit}
                        onChange={(e)=>setUnit(e.target.value)}
                        id= {`amount: ${props.id}`}
                    />
                    </div>
                    <button onClick={addItemToCart}
                        className="py-1 px-6 bg-green-800 rounded-full text-white ml-2 mt-1 hover:scale-105 shadow-md shadow-green-950 duration-200"
                    >+Add</button>
                </form>
            </div>
    )
}

export default Form;