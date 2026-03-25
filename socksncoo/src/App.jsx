import ProductListing from './component/ProductListing'
import Wishlist from './component/Wishlist'
import Cart from './component/Cart'
import Contact from './component/Contact'
import { useAppContext } from './context/AppContextHook'
import Nav from './component/Nav'
import Hero from './component/Hero'
import Categories from './component/Categories'
import Footer from './component/Footer'
import { useRef, useEffect, useState } from 'react'
import BackToCategoriesBTN from './component/BackToCategoriesBTN'

function App() {
  const { activePanel, setActivePanel } = useAppContext()
  const [isBtnVisible, setIsBtnVisible] = useState(false)
  const categoriesRef = useRef(null);
  const productListingRef = useRef(null);
  const closePanel = () => setActivePanel(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsBtnVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1 // 50% visible before triggering
      }
    );

    if (productListingRef.current) {
      observer.observe(productListingRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Nav />
      <Hero scrollToCategories={() => {
        categoriesRef.current.scrollIntoView({ behavior: "smooth" });
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

      {isBtnVisible && <BackToCategoriesBTN scrollToCategories={() => {
        categoriesRef.current.scrollIntoView({ behavior: "smooth" });
      }} />}

      <Categories ref={categoriesRef} />

      <ProductListing ref={productListingRef} />

      <Contact />
      <Footer />


    </>
  )
}

export default App