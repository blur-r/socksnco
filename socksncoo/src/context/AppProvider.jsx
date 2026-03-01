import { useState, useEffect } from "react";
import { AppContext } from "./AppContext";

export function AppProvider({ children }) {
    const [activePanel, setActivePanel] = useState(null)
    const [products, setProducts] = useState([])
    const [category, setCategory] = useState("socks")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    console.log("AppProvider component rendered")

    useEffect(() => {
        console.log("useEffect ran")
        const fetchProducts = async () => {
            try {
                setLoading(true)
                setError(null)
                const response = await fetch("/products.json", { cache: "no-store" })
                if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`)
                const data = await response.json()
                console.log("Fetched products:", data)
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

    const value = {
        activePanel,
        setActivePanel,
        filteredProducts,
        category,
        setCategory,
        loading,
        error,
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}