import { useAppContext } from "../context/AppContextHook"

const Categories = () => {
    const { setCategory, category } = useAppContext()

    return (
        <>
            <div className='flex flex-wrap justify-center gap-5 md:gap-10 my-10 '>

                <button
                    onClick={() => setCategory("socks")}
                    className={`w-45 h-14 md:w-40 md:h-40 py-7 rounded-sm md:rounded-2xl flex justify-start gap-3 px-4 md:justify-center items-center md:flex-col md:gap-2 border-amber-200 border shadow-[0_3px_6px_-2px_rgba(0,0,0,0.25)] 
    ${category === "socks" ? "bg-[#FBC322]" : "bg-[#f2f2f2]"}`}
                >
                    <div className={`rounded-full w-12 h-12 md:w-20 md:h-20 flex justify-center items-center 
    ${category === "socks" ? "bg-white" : "bg-[#f9f0d5]"}`}>
                        <i className="fa-solid fa-socks text-xl md:text-3xl text-[#FBC322]"></i>
                    </div>
                    <p className={`text-md md:text-xl font-bold ${category === "socks" ? "text-white" : ""}`}>socks</p>
                </button>

                <button
                    onClick={() => setCategory("rings")}
                    className={`w-45 h-14 md:w-40 md:h-40 py-7 rounded-sm md:rounded-2xl flex justify-start gap-3 px-4 md:justify-center items-center md:flex-col md:gap-2 border-amber-200 border shadow-[0_3px_6px_-2px_rgba(0,0,0,0.25)] 
    ${category === "rings" ? "bg-[#FBC322]" : "bg-[#f2f2f2]"}`}
                >
                    <div className={`rounded-full w-12 h-12 md:w-20 md:h-20 flex justify-center items-center 
    ${category === "rings" ? "bg-white" : "bg-[#f9f0d5]"}`}>
                        <i className="fa-solid fa-ring  text-xl md:text-3xl  text-[#FBC322]"></i>
                    </div>
                    <p className={`text-md md:text-xl font-bold ${category === "rings" ? "text-white" : ""}`}>rings</p>
                </button>

                <button
                    onClick={() => setCategory("chains")}
                    className={`w-45 h-14 md:w-40 md:h-40 py-7 rounded-sm md:rounded-2xl flex justify-start gap-3 px-4 md:justify-center items-center md:flex-col md:gap-2 border-amber-200 border shadow-[0_3px_6px_-2px_rgba(0,0,0,0.25)] 
    ${category === "chains" ? "bg-[#FBC322]" : "bg-[#f2f2f2]"}`}
                >
                    <div className={`rounded-full w-12 h-12 md:w-20 md:h-20 flex justify-center items-center 
    ${category === "chains" ? "bg-white" : "bg-[#f9f0d5]"}`}>
                        <i className="fa-solid fa-link  text-xl md:text-3xl  text-[#FBC322]"></i>
                    </div>
                    <p className={`text-md md:text-xl font-bold ${category === "chains" ? "text-white" : ""}`}>chains</p>
                </button>

                <button
                    onClick={() => setCategory("accessories")}
                    className={`w-45 h-14 md:w-40 md:h-40 py-7 rounded-sm md:rounded-2xl flex justify-start gap-3 px-4 md:justify-center items-center md:flex-col md:gap-2 border-amber-200 border shadow-[0_3px_6px_-2px_rgba(0,0,0,0.25)] 
    ${category === "accessories" ? "bg-[#FBC322]" : "bg-[#f2f2f2]"}`}
                >
                    <div className={`rounded-full w-12 h-12 md:w-20 md:h-20 flex justify-center items-center 
    ${category === "accessories" ? "bg-white" : "bg-[#f9f0d5]"}`}>
                        <i className="fa-solid fa-bag-shopping  text-xl md:text-3xl  text-[#FBC322]"></i>
                    </div>
                    <p className={`text-md md:text-xl font-bold ${category === "accessories" ? "text-white" : ""}`}>accessories</p>
                </button>

            </div>
        </>
    )
}

export default Categories