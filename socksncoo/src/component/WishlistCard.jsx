import { useAppContext } from "../context/AppContextHook"

function WishlistCard({ product }) {
    const { addToCart, removeFromCart, isInCart, addToWishlist, isInWishlist, removeFromWishlist } = useAppContext()

    const isCart = isInCart(product.id)
    const handleCart = () => {
        if (isCart) {
            removeFromCart(product.id)
        } else {
            addToCart(product)
        }
    }

    const isWishlist = isInWishlist(product.id)
    const handleWishlist = () => {
        if (isWishlist) {
            removeFromWishlist(product.id)
        } else {
            addToWishlist(product)
        }
    }


    return (
        <>
            <div className=' w-full md:max-w-90 p-5'>
                <div className='relative'>
                    <img src={product.image} alt="" className="w-full rounded-sm" />

                    <div className="absolute top-3 right-3 bg-white rounded-full w-6 h-6 px-1" onClick={handleWishlist}>
                        <button className="hover:scale-110 transition-transform duration-200">
                            <i className={`fas fa-heart ${isWishlist ? "text-red-500" : "text-gray-400"}`}></i>
                        </button>
                    </div>
                </div >

                <div className='mt-2 flex flex-col gap-2'>
                    <p className='text-md font-semibold'>{product.name}</p>
                    <p className='text-2xl text-[#FBC322] font-bold'>₦{product.price}</p>
                    <button className='bg-[#F2F2F2] py-2 px-3 rounded-sm font-semibold flex gap-2 items-center justify-center' onClick={handleCart}>
                        <i className="fas fa-shopping-cart"></i>
                        {isCart ? "remove from cart" : "add to cart"}
                    </button>
                </div>
            </div>
        </>
    )
}

export default WishlistCard