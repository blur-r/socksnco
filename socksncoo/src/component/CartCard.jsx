import { useAppContext } from "../context/AppContextHook"
function CartCard({ product }) {

    const { removeFromCart } = useAppContext()

    const handleRemove = () => {
        removeFromCart(product.id)
    }

    return (
        <div className='flex gap-2 bg-white rounded-sm h-34 w-full  border border-gray-300'>
            <img src={product.image} alt="" className="w-[50%] rounded-l-md  border-r border-black-100" />
            <div className='flex flex-col gap-2.5 pt-4 pr-2'>
                <p className='text-sm font-semibold'>{product.name}</p>
                <p className='text-xl font-bold'>₦{product.price}</p>
                <button className='mr-auto' onClick={handleRemove}>
                    <i class="fa-solid fa-trash text-red-400"></i>
                </button>

            </div>
        </div>
    )
}

export default CartCard