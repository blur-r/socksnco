import pdImage from '../assets/Screenshot 2025-04-23 190723.png'

function ProductCard() {
    return (
        <>
            <div className=' w-full md:max-w-60 p-5'>
                <div className='relative'>
                    <img src={pdImage} alt="" className="w-full rounded-xl" />

                    <div className="absolute top-3 right-3 bg-white rounded-full w-6 h-6 px-1">
                        <button
                            className="hover:scale-110 transition-transform duration-200"
                        >
                            <i className="fas fa-heart"></i>
                        </button>
                    </div>
                </div >

                <div className='mt-2'>
                    <p className='text-md font-semibold'>original nike socks</p>
                    <p className='text-2xl font-bold'>#2500</p>
                    <button className='bg-amber-200 py-2 px-3 rounded-sm font-semibold'>Add to Cart</button>
                </div>
            </div>
        </>
    )
}

export default ProductCard