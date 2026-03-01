import ProductCard from "./ProductCard"
import { useAppContext } from "../context/AppContextHook"



const ProductListing = () => {

    const { filteredProducts } = useAppContext()

    return (
        <>

            <div className='flex flex-wrap gap-3 px-3 md:px-5'>
                {filteredProducts.map(p => (
                    <ProductCard product={p} key={p.id} />
                ))}
            </div>
        </>
    )
}

export default ProductListing