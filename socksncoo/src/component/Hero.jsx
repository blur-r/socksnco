import bgImage from '../assets/IMG_3417.PNG'

const Hero = () => {
    return (
        <>
            <div className="relative min-h-svh flex bg-contain bg-center bg-no-repeat pb-15 md:pb-30 bg-[#FBC322]" style={{ backgroundImage: `url(${bgImage})` }}>
                <button className='mx-auto h-12 bg-black opacity-85 text-white px-7 py-2 rounded-3xl mt-auto'>
                    start shopping
                    <i className="fa-solid fa-arrow-right mt-1 ml-3"></i>
                </button>
            </div>
        </>
    )
}

export default Hero