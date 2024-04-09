

function Navbar(){
    return(
        <>
            <div className="parent">
                <div className=" flex items-center justify-between py-2 px-40 bg-red-950 text-white">
                    <h1 className="text-4xl">React Meals</h1>
                    <div className=" bg-gray-600 px-6 py-2 rounded-full text-center">
                        <i></i>
                        <h3>Your Cart <span className="bg-red-950 px-3 rounded-full text-center">0</span></h3>                      
                    </div>
                </div>
                <div style={{backgroundImage:`url('https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=600')`,
                              height: '200px', // Set a height for the div
                              width: '100%',
                            //   backgroundSize: 'cover',
                              backgroundPosition: 'center'
                            }}>                               
                </div>
            </div>
        </>
    )
}

export default Navbar;