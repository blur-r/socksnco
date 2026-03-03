import CartCard from "./CartCard"
import { useAppContext } from "../context/AppContextHook"

function Cart() {

    const { cart, setCart } = useAppContext()
    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0)
    const finalTotalPrice = totalPrice.toFixed(2)
    const clearCart = () => {
        setCart([])
    }

    return (
        <div className="bg-[#f2f2f2] w-[70%] md:w-[30%] h-[93%] fixed left-0 top-12.5 z-60 p-3 pt-5 rounded-r-2xl">

            {cart.length > 0 ? (
                <>
                    <div className="flex justify-between items-center">
                        <p className="text-2xl md:text-3xl text-center font-bold">your cart</p>
                        <p>{cart.length} items</p>
                    </div>
                    <hr className="mt-2" />
                    <div className="pt-7 flex flex-col gap-2 overflow-y-scroll h-[70%] mb-4">

                        {cart.map((product) => {
                            return <CartCard product={product} key={product.id} />
                        })}
                    </div>

                    <div className="bg-white h-[22%] md:h-[21%] rounded-xl flex flex-col items-center justify-evenly px-3">
                        <div className="flex gap-7  items-center">
                            <p className="text-xl font-bold">total</p>
                            <p className="text-xl font-bold">-</p>
                            <p className="text-2xl font-bold">₦{finalTotalPrice}</p>
                        </div>
                        <button className={`flex items-center justify-center w-full md:w-[80%] text-center gap-2   text-white text-sm px-3 py-2 shadow-md rounded-md sm:font-semibold sm:px-2 bg-[#131922] hover:bg-[#273447]`}>
                            <i className="fas fa-arrow-right"></i>
                            proceed to checkout
                        </button>

                        <button onClick={clearCart} className={`flex items-center w-full md:w-[80%]  justify-center text-center gap-2 text-sm px-7 py-2 shadow-[0_0_11px_-1px_rgba(0,0,0,0.25)] rounded-md  sm:font-semibold sm:px-2 bg-[#4B5563] text-white hover:bg-[#6a778a]`}>
                            <i class="fa-regular fa-trash-can"></i>
                            empty cart
                        </button>
                    </div>
                </>
            ) : ((
                <div className="min-h-full flex justify-center items-center">
                    <div className="flex flex-col items-center p-8">
                        <i className="fa-solid fa-cart-shopping text-6xl md:text-8xl text-gray-400 mx-auto opacity-40"></i>
                        <p className="text-center text-gray-500 text-xl md:text-2xl">
                            Your cart is empty...
                        </p>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default Cart