const Categories = () => {
    return (
        <>
            <div className='flex flex-wrap justify-center gap-5 md:gap-10 my-10 '>

                <div className='bg-[#FBC322] w-45 h-14 md:w-40 md:h-40 py-7 rounded-sm md:rounded-2xl flex justify-start gap-3 px-4 md:justify-center items-center md:flex-col md:gap-2 border-amber-200 border shadow-[0_3px_6px_-2px_rgba(0,0,0,0.25)]'>
                    <div className='bg-white rounded-full w-12 h-12 md:w-20 md:h-20 flex justify-center items-center'>
                        <i class="fa-solid fa-socks text-xl md:text-3xl text-[#FBC322]"></i>
                    </div>
                    <p className='text-md md:text-xl font-bold text-white'>socks</p>
                </div>

                <div className='bg-[#f2f2f2] w-45 h-14 md:w-40 md:h-40 py-7 rounded-sm md:rounded-2xl flex justify-start gap-3 px-4 md:justify-center items-center md:flex-col md:gap-2 border-amber-200 border shadow-[0_3px_6px_-2px_rgba(0,0,0,0.25)]'>
                    <div className='bg-[#f9f0d5] rounded-full w-12 h-12 md:w-20 md:h-20 flex justify-center items-center'>
                        <i class="fa-solid fa-ring  text-xl md:text-3xl  text-[#FBC322]"></i>
                    </div>
                    <p className='text-md md:text-xl font-bold '>rings</p>
                </div>

                <div className='bg-[#f2f2f2] w-45 h-14 md:w-40 md:h-40 py-7 rounded-sm md:rounded-2xl flex justify-start gap-3 px-4 md:justify-center items-center md:flex-col md:gap-2 border-amber-200 border shadow-[0_3px_6px_-2px_rgba(0,0,0,0.25)]'>
                    <div className='bg-[#f9f0d5] rounded-full w-12 h-12 md:w-20 md:h-20 flex justify-center items-center'>
                        <i class="fa-solid fa-link  text-xl md:text-3xl  text-[#FBC322]"></i>
                    </div>
                    <p className='text-md md:text-xl font-bold'>chains</p>
                </div>

                <div className='bg-[#f2f2f2] w-45 h-14 md:w-40 md:h-40 py-7 rounded-sm md:rounded-2xl flex justify-start gap-3 px-4 md:justify-center items-center md:flex-col md:gap-2 border-amber-200 border shadow-[0_3px_6px_-2px_rgba(0,0,0,0.25)]'>
                    <div className='bg-[#f9f0d5] rounded-full w-12 h-12 md:w-20 md:h-20 flex justify-center items-center'>
                        <i class="fa-solid fa-bag-shopping  text-xl md:text-3xl  text-[#FBC322]"></i>
                    </div>
                    <p className='text-md md:text-xl font-bold'>accessories</p>
                </div>

            </div>
        </>
    )
}

export default Categories