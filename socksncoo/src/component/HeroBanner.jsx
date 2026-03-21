const ScrollingBanner = () => {
    const items = [
        "Premium Cotton Socks",
        "Rings • Chains • Accessories",
        "Elevate Your Style",
        "Crafted for Comfort",
        "Designed for Confidence",
    ];

    return (
        <div className="banner">
            <div className="banner-track">
                {items.map((text, index) => (
                    <span key={index} className="banner-item">
                        {text}
                    </span>
                ))}

                {items.map((text, index) => (
                    <span key={`dup-${index}`} className="banner-item">
                        {text}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default ScrollingBanner;