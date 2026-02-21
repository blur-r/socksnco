import bgImage from './assets/IMG_3417.PNG'
import ProductCard from './component/ProductCard'
import { useEffect, useState } from 'react'
import Wishlist from './component/Wishlist'
import Cart from './component/Cart'

function App() {

  const [scrolled, setScrolled] = useState(false)
  useEffect(
    () => {
      const handleScroll = () => {
        if (window.scrollY >= window.innerHeight) {
          setScrolled(true)
        } else {
          setScrolled(false)
        }
      }

      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }, []
  )

  const [activePanel, setActivePanel] = useState(null)


  const toggleCart = () => {
    setActivePanel(prev => (prev == "cart" ? null : "cart"))

  }

  const toggleWishlist = () => {
    setActivePanel(prev => (prev == "wishlist" ? null : "wishlist"))

  }

  return (
    <>
      <div className={`sticky top-0 z-50 ${scrolled ? "bg-fff" : "bg-[#FBC322] "}`}>
        <div className='flex gap-4 bg-white w-45 md:w-60 py-3 px-3 justify-evenly mx-auto rounded-b-2xl shadow-[0_0_11px_-1px_rgba(0,0,0,0.25)]'>
          <button onClick={toggleCart}>
            <i className="fa-solid fa-cart-shopping text-xl md:text-2xl"></i>
          </button>
          <a href="#">
            <i className="fa-solid fa-phone text-xl md:text-2xl"></i>
          </a>
          <button onClick={toggleWishlist}>
            <i className="fa-solid fa-heart text-xl md:text-2xl"></i>
          </button>
        </div>
      </div>
      <div className="relative min-h-svh flex bg-contain bg-center bg-no-repeat pb-15 md:pb-30 bg-[#FBC322]" style={{ backgroundImage: `url(${bgImage})` }}>
        <button className='mx-auto h-12 bg-black opacity-85 text-white px-7 py-2 rounded-3xl mt-auto'>
          start shopping
          <i className="fa-solid fa-arrow-right mt-1 ml-3"></i>
        </button>

      </div>

      {/* cart */}
      {activePanel === 'cart' && <Cart />}

      {/* wislist */}
      {activePanel === "wishlist" && <Wishlist />}

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

      <div className='flex flex-wrap gap-3 px-3 md:px-5'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </>
  )
}

export default App