import { useAppContext } from "../context/AppContextHook"
import { forwardRef } from 'react'


const Categories2 = forwardRef((props, ref) => {
    const { setCategory, category } = useAppContext()
    const categories = [
        {
            name: "socks",
        },
        {
            name: "rings",
        },
        {
            name: "chains",
        },
        {
            name: "glasses",
        },
        {
            name: "customized",
        },
        {
            name: "others",
        },
    ];

    return (
        <div className="project-tabs" ref={ref}>
            {categories.map((cat) => {
                return (
                    <button
                        onClick={() => setCategory(`${cat.name}`)}
                        className={`tab-btn border-amber-200 border shadow-[0_3px_6px_-2px_rgba(0,0,0,0.25)] ${category === cat.name ? 'bg-amber-200 text-amber-800' : 'bg-white text-gray-800'}`}>
                        {cat.name}
                    </button>
                )
            })}

        </div>
    )
})

export default Categories2