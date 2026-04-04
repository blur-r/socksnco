import { useAppContext } from "../context/AppContextHook"
function CartCard({ product }) {

    const { removeFromCart, setCart } = useAppContext()

    const handleRemove = () => {
        removeFromCart(product.id)
    }

    const increaseQuantity = () => {

        setCart(
            (prev) => prev.map(item =>
                item.id === product.id ?
                    { ...item, quantity: item.quantity + 1 } :
                    item
            )
        )

    }

    const decreaseQuantity = () => {

        setCart(
            (prev) => prev.map(item =>
                item.id === product.id ?
                    { ...item, quantity: item.quantity - 1 } :
                    item
            )
                .filter(item => item.quantity > 0)
        )

    }

    return (
        <div className='flex gap-2 bg-white rounded-sm h-34 w-full border border-gray-300'>
            <img src={product.image} alt="" className="w-[50%] rounded-l-md  border-r border-black-100 object-cover" />
            <div className='flex flex-col gap-1.5 pt-1.5 pl-0 md:pl-2'>
                <p className='text-sm font-semibold'>{product.name}</p>
                <p className='text-xl font-bold'>₦{product.price}</p>
                <div className="flex items-center gap-2">
                    <button onClick={increaseQuantity} className="text-xl font-bold bg-gray-200 hover:bg-gray-300 w-8 h-5 flex justify-center items-center md:pb-1 rounded-sm shadow-sm">+</button>
                    <p className="text-xl font-bold">{product.quantity || 1}</p>
                    <button onClick={decreaseQuantity} className="text-xl font-bold bg-gray-200 hover:bg-gray-300 w-8 h-5 flex justify-center items-center md:pb-1 rounded-sm shadow-sm">-</button>
                </div>
                <button className='mr-auto' onClick={handleRemove}>
                    <i className="fa-solid fa-trash text-red-500 "></i>
                </button>

            </div>
        </div>
    )
}

export default CartCard