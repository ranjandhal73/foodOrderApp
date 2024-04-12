


const Form = () =>{
    return(
            <div >
                <form>
                    <div className="flex">
                    <p className="font-bold">Unit:</p>
                    <input 
                        className=" border border-gray-400 w-12"
                        type="number" 
                        min='0'
                        width=''
                    />
                    </div>
                    <button onClick={(e)=>e.preventDefault()}
                        className="py-1 px-6 bg-green-800 rounded-full text-white ml-2 mt-1 hover:scale-105 shadow-md shadow-green-950 duration-200"
                    >+Add</button>
                </form>
            </div>
    )
}

export default Form;