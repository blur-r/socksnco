const Categories3 = () => {
    const categories = [
        {
            name: "socks",
            icon: "fa-socks",
        },
        {
            name: "Rings",
            icon: "fa-ring",
        },
        {
            name: "Chains",
            icon: "fa-link",
        },
        {
            name: "Glasses",
            icon: "fa-glasses",
        },
        {
            name: "Others",
            icon: "fa-ellipsis",
        },
        {
            name: "Customized",
            icon: "fa-sliders",
        },
    ];

    return (
        <div className="flex justify-around flex-wrap px-5 sm:w-[70%] sm:mx-auto mb-10">
            {
                categories.map((cat) => {
                    return (
                        <button className="py-3 rounded-sm flex flex-col gap-2 justify-center items-center bg-[#f9f7f4] w-30 border-amber-200 border shadow-[0_3px_6px_-2px_rgba(0,0,0,0.25)]">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-[#F9F0D5]`}>
                                <i className={`fa-solid ${cat.icon} text-[#FBC322]`}></i>
                            </div>
                            <div>
                                <p className="font-semibold">{cat.name}</p>
                            </div>
                        </button>
                    )
                })
            }
        </div>
    )
}

export default Categories3