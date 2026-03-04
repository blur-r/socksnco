import WishlistCard from "./WishlistCard"
import { useAppContext } from "../context/AppContextHook"

function Wishlist() {

    const { wishlist, setWishlist, addToCart, cart } = useAppContext()

    const clearWishlist = () => {
        setWishlist([])
    }

    const total = wishlist.reduce((acc, item) => acc + item.price, 0)
    const finalTotal = total.toFixed(2)

    const moveToCart = () => {
        wishlist.forEach((item) => {
            if (!cart.some(t => item.id === t.id)) {
                addToCart(item)
            }
        })
    }


    return (
        <div className="bg-white w-[70%] md:w-[30%] h-[93%] fixed right-0 top-12.5 z-60 px-3 pt-5 rounded-l-2xl">

            {wishlist.length > 0 ? (
                <>
                    <div className="flex justify-between items-center">
                        <p className="text-2xl md:text-3xl text-center font-bold">your wishlist</p>
                        <p>{wishlist.length}items</p>
                    </div>
                    <hr className="mt-2" />
                    <div className="pt-7 flex flex-col items-center gap-3 overflow-y-scroll h-[70%] mb-4">
                        {wishlist.map((product) => {
                            return <WishlistCard product={product} key={product.id} />
                        })}

                    </div>

                    <div className="bg-[#f2f2f2] h-[22%] md:h-[21%] rounded-xl flex flex-col items-center justify-evenly px-3 -mx-3">
                        <div className="flex gap-7  items-center">
                            <p className="text-xl font-bold">total</p>
                            <p className="text-xl font-bold">-</p>
                            <p className="text-2xl font-bold">₦{finalTotal}</p>
                        </div>
                        <button onClick={moveToCart} className={`flex items-center justify-center w-full md:w-[80%] text-center gap-2   text-white text-sm px-3 py-2 shadow-md rounded-md sm:font-semibold sm:px-2 bg-[#131922] hover:bg-[#273447]`}>
                            <i className="fas fa-arrow-right  mt-1.5"></i>
                            move items to cart
                        </button>

                        <button onClick={clearWishlist} className={`flex items-center w-full md:w-[80%]  justify-center text-center gap-2 text-sm px-7 py-2 shadow-[0_0_11px_-1px_rgba(0,0,0,0.25)] rounded-md  sm:font-semibold sm:px-2 bg-[#4B5563] text-white hover:bg-[#6a778a]`}>
                            <i class="fa-regular fa-trash-can"></i>
                            empty wishlist
                        </button>
                    </div>
                </>
            ) : (
                (<div className="min-h-full flex justify-center items-center">
                    <div className="flex flex-col items-center">
                        <i className="fa-regular fa-heart text-6xl md:text-8xl text-gray-400 opacity-40"></i>
                        <p className="text-center text-gray-500 text-xl md:text-2xl">
                            Your wishlist is empty...
                        </p>
                    </div>
                </div>
                )
            )}
        </div>
    )
}

export default Wishlist