import ProductCard from './component/ProductCard'
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

      <div className='flex flex-wrap gap-3 px-3 md:px-5'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>

      <Contact />

    </>
  )
}

export default App