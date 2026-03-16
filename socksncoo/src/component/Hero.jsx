import bgImage from '../assets/IMG_3417.PNG'
// import { useEffect, useRef } from "react";
// import NET from "vanta/dist/vanta.net.min";
// import * as THREE from "three";

const Hero = () => {

    // const vantaRef = useRef(null);
    // const effectRef = useRef(null);

    // useEffect(() => {
    //     if (!effectRef.current && vantaRef.current) {
    //         effectRef.current = NET({
    //             el: vantaRef.current,
    //             THREE: THREE,
    //             color: 0x1111111,
    //             backgroundColor: 0xFBC322,
    //             backgroundAlpha: 0
    //         });
    //     }

    //     return () => {
    //         if (effectRef.current) {
    //             effectRef.current.destroy();
    //             effectRef.current = null;
    //         }
    //     };

    // ref = { vantaRef }

    // }, []);

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


