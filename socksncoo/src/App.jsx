import bgImage from './assets/IMG_3417.PNG'
import ProductCard from './component/ProductCard'

function App() {
  return (
    <>
      <div className='bg-[#FBC322] sticky top-0 z-50'>
        <div className='flex gap-4 bg-white w-40 md:w-50 py-3 px-3 justify-center mx-auto rounded-b-full shadow-[0_0_11px_-1px_rgba(0,0,0,0.25)]'>
          <a href="#">
            <i className="fa-solid fa-cart-shopping text-2xl md:text-3xl"></i>
          </a>
          <a href="#">
            <i className="fa-solid fa-heart text-2xl md:text-3xl"></i>
          </a>
          <a href="#">
            <i className="fa-solid fa-envelope text-2xl md:text-3xl"></i>
          </a>
        </div>
      </div>
      <div className="min-h-svh bg-contain bg-center bg-no-repeat bg-[#FBC322]" style={{ backgroundImage: `url(${bgImage})` }}>

      </div>

      <div className='flex flex-wrap justify-center gap-5 md:gap-10 my-10 '>

        <div className='bg-[#F3F4F6] w-40 h-14 md:w-40 md:h-40 py-6 rounded-sm md:rounded-2xl flex justify-evenly md:justify-center items-center md:flex-col md:gap-2 shadow-[0_0_11px_0px_rgba(0,0,0,0.25)]'>
          <div className='bg-[#f9f0d5] rounded-full w-12 h-12 md:w-20 md:h-20 flex justify-center items-center'>
            <i class="fa-solid fa-socks text-xl md:text-3xl text-[#FBC322]"></i>
          </div>
          <p className='text-md md:text-xl font-bold'>socks</p>
        </div>

        <div className='bg-[#f2f2f2] w-40 h-14 md:w-40 md:h-40 py-6 rounded-sm md:rounded-2xl flex justify-evenly md:justify-center items-center md:flex-col md:gap-2 shadow-[0_0_11px_-1px_rgba(0,0,0,0.25)]'>
          <div className='bg-[#f9f0d5] rounded-full w-12 h-12 md:w-20 md:h-20 flex justify-center items-center'>
            <i class="fa-solid fa-ring  text-xl md:text-3xl  text-[#FBC322]"></i>
          </div>
          <p className='text-md md:text-xl font-bold '>rings</p>
        </div>

        <div className='bg-[#f2f2f2] w-40 h-14 md:w-40 md:h-40 py-6 rounded-sm md:rounded-2xl flex justify-evenly md:justify-center items-center md:flex-col md:gap-2 shadow-[0_0_11px_-1px_rgba(0,0,0,0.25)]'>
          <div className='bg-[#f9f0d5] rounded-full w-12 h-12 md:w-20 md:h-20 flex justify-center items-center'>
            <i class="fa-solid fa-link  text-xl md:text-3xl  text-[#FBC322]"></i>
          </div>
          <p className='text-md md:text-xl font-bold'>chains</p>
        </div>

        <div className='bg-[#f2f2f2] w-40 h-14 md:w-40 md:h-40 py-6 rounded-sm md:rounded-2xl flex justify-evenly md:justify-center items-center md:flex-col md:gap-2 shadow-[0_0_11px_-1px_rgba(0,0,0,0.25)]'>
          <div className='bg-[#f9f0d5] rounded-full w-12 h-12 md:w-20 md:h-20 flex justify-center items-center'>
            <i class="fa-solid fa-bag-shopping  text-xl md:text-3xl  text-[#FBC322]"></i>
          </div>
          <p className='text-md md:text-xl font-bold'>accessories</p>
        </div>

        {/* <div className='bg-[#f2f2f2] w-40 h-40 rounded-2xl flex justify-center items-center flex-col gap-2'>
          <div className='bg-[#f9f0d5] rounded-full w-20 h-20 flex justify-center items-center'>
            <i class="fa-solid fa-bag-shopping text-3xl text-[#FBC322]"></i>
          </div>
          <p className='text-xl font-bold'>accessories</p>
        </div> */}
      </div>

      <div>
        <ProductCard />
        <ProductCard />
      </div>
    </>
  )
}

export default App