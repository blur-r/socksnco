import pdImage from '../assets/Screenshot 2025-04-23 190723.png'

function CartCard() {
    return (
        <div className='flex gap-4 bg-white rounded-xl pr-3'>
            <img src={pdImage} alt="" className="w-[30%] rounded-xl" />
            <div className='flex flex-col gap-3.5 justify-center w-[55%]'>
                <div className='flex w-full justify-between items-center'>
                    <p className='text-2xl font-semibold'>nike socks</p>
                    <i class="fa-solid fa-trash text-red-400"></i>
                </div>
                <p className='text-xl font-bold'>#200</p>
            </div>
        </div>
    )
}

export default CartCard