import { useEffect, useState } from "react"
import { useAppContext } from "../context/AppContextHook"

const Nav = () => {
    const { setActivePanel } = useAppContext()
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
        </>
    )
}

export default Nav
