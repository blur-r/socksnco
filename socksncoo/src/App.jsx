import ProductListing from './component/ProductListing'
import Wishlist from './component/Wishlist'
import Cart from './component/Cart'
import Contact from './component/Contact'
import { useAppContext } from './context/AppContextHook'
import Nav from './component/Nav'
import Hero from './component/Hero'
import Categories from './component/Categories'
import Footer from './component/Footer'
import { useRef } from 'react'

function App() {
  const { activePanel, setActivePanel } = useAppContext()
  const aboutRef = useRef(null);
  const closePanel = () => setActivePanel(null)


  return (
    <>
      <Nav />
      <Hero scrollToCategories={() => {
        aboutRef.current.scrollIntoView({ behavior: "smooth" });
      }} />


      {activePanel && (
        <div className='overlay' onClick={closePanel}>
          {activePanel === 'cart' && (
            <div onClick={(e) => e.stopPropagation()}>
              <Cart />
            </div>
          )}

          {activePanel === 'wishlist' && (
            <div onClick={(e) => e.stopPropagation()}>
              <Wishlist />
            </div>
          )}

        </div>
      )}


      {/* {activePanel === 'cart' && <Cart />}


      {activePanel === "wishlist" && <Wishlist />} */}

      <Categories ref={aboutRef} />

      <ProductListing />

      <Contact />
      <Footer />


    </>
  )
}

export default App