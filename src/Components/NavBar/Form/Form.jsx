


const Form = () =>{
    return(
        <>
            <div >
                <form className="">
                    <div className="flex">
                    <p className="font-bold">Amount:</p>
                    <input 
                        className=" border border-gray-400 w-12"
                        type="number" 
                        min='0'
                        width=''
                    />
                    </div>
                    <button className="py-1 px-6 bg-red-800 rounded-full text-white ml-2 mt-1"
                    >+Add</button>
                </form>
            </div>
        </>
    )
}

export default Form;