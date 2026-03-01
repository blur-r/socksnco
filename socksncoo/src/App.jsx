import ProductListing from './component/ProductListing'
import Wishlist from './component/Wishlist'
import Cart from './component/Cart'
import Contact from './component/Contact'
import { useAppContext } from './context/AppContextHook'
import Nav from './component/Nav'
import Hero from './component/Hero'
import Categories from './component/Categories'

function App() {
  const { activePanel } = useAppContext()

  return (
    <>
      <Nav />
      <Hero />

      {/* cart */}
      {activePanel === 'cart' && <Cart />}

      {/* wislist */}
      {activePanel === "wishlist" && <Wishlist />}

      <Categories />

      <ProductListing />

      <Contact />

    </>
  )
}

export default App