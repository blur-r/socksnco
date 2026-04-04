import { useAppContext } from "../context/AppContextHook"
import { useState } from "react"
function ProductCard({ product }) {

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

    const [showModal, setShowModal] = useState(false)

    return (
        <>
            {/* <div className=' w-full md:max-w-70 p-5'> */}
            <div className='p-5'>
                <div className='relative'>
                    <img src={product.image} alt="" className="w-full h-60 md:h-48 object-cover md:object-cover  rounded-sm " />

                    <button className="cursor-pointer absolute top-1 right-1 bg-white rounded-full w-9 md:h-6 md:w-6 h-9 flex justify-center items-center hover:scale-110 transition-transform duration-200" onClick={handleWishlist}>
                        <i className={`fas fa-heart text-center text-xl md:text-sm  ${isWishlist ? "text-red-500" : "text-gray-400"}`}></i>
                    </button>

                    <button
                        className="cursor-pointer absolute top-1 left-1 bg-white rounded-full w-9 h-9 md:w-6 md:h-6 flex justify-center items-center hover:scale-110 transition-transform duration-200"
                        onClick={() => setShowModal(true)}
                    >
                        <i className="fas fa-expand text-gray-600 text-lg md:text-sm"></i>
                    </button>
                </div >

                <div className='mt-2 flex flex-col gap-2'>
                    <p className='text-md font-semibold'>{product.name}</p>
                    <p className='text-2xl text-[#FBC322] font-bold'>₦{product.price}</p>
                    <button className='bg-[#F2F2F2] cursor-pointer py-2 px-3 rounded-sm font-semibold flex gap-2 items-center justify-center' onClick={handleCart}>
                        <i className="fas fa-shopping-cart"></i>
                        {isCart ? "remove from cart" : "add to cart"}
                    </button>
                </div>

                {showModal && (
                    <div onClick={() => setShowModal(false)} className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 animate-fadeIn">

                        <div onClick={(e) => e.stopPropagation()} className="relative bg-white p-3 rounded-sm max-w-[90%] max-h-[90%]">

                            <button
                                className="absolute top-2 right-2 bg-white rounded-full w-8 h-8 flex justify-center items-center shadow"
                                onClick={() => setShowModal(false)}
                            >
                                <i className="fas fa-times text-gray-700"></i>
                            </button>

                            <img
                                src={product.image}
                                alt={product.name}
                                className="max-h-[80vh] object-contain rounded"
                            />
                        </div>
                    </div>
                )}

            </div>
        </>
    )
}

export default ProductCard