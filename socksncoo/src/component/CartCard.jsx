import pdImage from '../assets/Screenshot 2025-04-23 190723.png'

function CartCard() {
    return (
        <div className='flex gap-2 bg-white rounded-sm h-34 w-full md:w-fit '>
            <img src={pdImage} alt="" className="w-[50%] rounded-l-md" />
            <div className='flex flex-col gap-3.5 justify-center pr-2'>
                <p className='text-lg font-semibold'>nike socks</p>
                <p className='text-sm font-bold'>#200</p>
                <i class="fa-solid fa-trash text-red-400"></i>
            </div>
        </div>
    )
}

export default CartCard