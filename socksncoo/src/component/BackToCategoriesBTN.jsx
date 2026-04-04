const BackToCategoriesBTN = ({ scrollToCategories }) => {
    return (
        <button className="cursor-pointer fixed bottom-5 -right-20 transform -translate-x-1/2 bg-[#131922] text-white px-4 py-2 rounded-md shadow-md hover:bg-[#273447] z-500" onClick={scrollToCategories}>
            back to categories
        </button>
    )
}

export default BackToCategoriesBTN