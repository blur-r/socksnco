// import pdImage from '../assets/Screenshot 2025-04-23 190723.png'

function ProductCard({ product }) {
    return (
        <>
            <div className=' w-full md:max-w-70 p-5'>
                <div className='relative'>
                    <img src={product.image} alt="" className="w-full h-48 object-cover  rounded-sm" />

                    <div className="absolute top-3 right-3 bg-white rounded-full w-6 h-6 px-1">
                        <button className="hover:scale-110 transition-transform duration-200">
                            <i className="fas fa-heart"></i>
                        </button>
                    </div>
                </div >

                <div className='mt-2 flex flex-col gap-2'>
                    <p className='text-md font-semibold'>{product.name}</p>
                    <p className='text-2xl text-[#FBC322] font-bold'>#{product.price}</p>
                    <button className='bg-[#F2F2F2] py-2 px-3 rounded-sm font-semibold'>add to cart</button>
                </div>
            </div>
        </>
    )
}

export default ProductCard