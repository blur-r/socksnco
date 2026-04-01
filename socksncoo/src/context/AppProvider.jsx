import { useState, useEffect } from "react";
import { AppContext } from "./AppContext";

export function AppProvider({ children }) {
    const [activePanel, setActivePanel] = useState(null)
    const [products, setProducts] = useState([])
    const [category, setCategory] = useState("socks")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    // console.log("AppProvider component rendered")

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true)
                setError(null)
                const response = await fetch("/products.json", { cache: "no-store" })
                if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`)
                const data = await response.json()
                setProducts(data.products)
            } catch (err) {
                console.error("Fetch failed:", err)
                setError("Failed to fetch products")
            } finally {
                setLoading(false)
            }

        }

        fetchProducts()
    }, [])

    const filteredProducts = products.filter(p => p.category === category)

    // const [cart, setCart] = useState(() => {
    //     const stored = localStorage.getItem("cart")
    //     return stored ? JSON.parse(stored) : []
    // })

    // const [cart, setCart] = useState(() => {
    //     try {
    //         const stored = localStorage.getItem("cart");
    //         const parsed = stored ? JSON.parse(stored) : [];

    //         // ✅ Ensure it's actually an array
    //         return Array.isArray(parsed) ? parsed : [];
    //     } catch {
    //         return [];
    //     }
    // });

    const [cart, setCart] = useState(() => {
        try {
            const stored = localStorage.getItem("cart");
            const parsed = stored ? JSON.parse(stored) : [];

            // ✅ Ensure each item has a quantity
            const migrated = Array.isArray(parsed)
                ? parsed.map(item => ({ ...item, quantity: item.quantity || 1 }))
                : [];

            return migrated;
        } catch {
            return [];
        }
    });

    useEffect(
        () => {
            localStorage.setItem("cart", JSON.stringify(cart))
        }, [cart]
    )

    // useEffect(() => {
    //     setCart([]);
    // }, []);

    const addToCart = (product) => {
        setCart((prev) => [...prev, { ...product, quantity: 1 }])
    }

    const removeFromCart = (productId) => {
        setCart((prev) => prev.filter((product) => product.id !== productId));
    }

    const isInCart = (productId) => {
        return cart.some((product) => product.id === productId)
    }


    const [wishlist, setWishlist] = useState(() => {
        const stored = localStorage.getItem("wishlist")
        return stored ? JSON.parse(stored) : []
    })

    useEffect(
        () => {
            localStorage.setItem("wishlist", JSON.stringify(wishlist))
        }, [wishlist]
    )

    const addToWishlist = (product) => {
        setWishlist((prev) => [...prev, product])
    }

    const removeFromWishlist = (productId) => {
        setWishlist((prev) => prev.filter((product) => product.id !== productId));
    }

    const isInWishlist = (productId) => {
        return wishlist.some((product) => product.id === productId)
    }


    const value = {
        activePanel,
        setActivePanel,
        filteredProducts,
        category,
        setCategory,
        loading,
        error,
        cart,
        wishlist,
        setWishlist,
        addToCart,
        setCart,
        removeFromCart,
        isInCart,
        addToWishlist,
        removeFromWishlist,
        isInWishlist
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}