

import"./fooimage.css";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function FooterImage() {
    const [slidesToShow, setSlidesToShow] = useState(4); // Default to 4 slides

    useEffect(() => {
        const updateSlidesToShow = () => {
            if (window.innerWidth < 600) {
                setSlidesToShow(1); // Show 1 image for small screens
            } else if (window.innerWidth < 900) {
                setSlidesToShow(2); // Show 2 images for tablets
            } else if (window.innerWidth < 1200) {
                setSlidesToShow(3); // Show 3 images for medium screens
            } else {
                setSlidesToShow(4); // Default to 4 images for large screens
            }
        };

        updateSlidesToShow();
        window.addEventListener("resize", updateSlidesToShow);
        return () => window.removeEventListener("resize", updateSlidesToShow);
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 1500, // Adjusted for smooth transitions
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        draggable: false,
        swipe: false,
    };

    return (
        <div className="foo-img">
            <Slider {...settings}>
                {data.map((d, index) => (
                    <div key={index} className="foo-image-container">
                        <img src={d.img} alt="" className="image" />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default FooterImage;

const data = [
    { img: "/images/hero-1.webp" },
    { img: "/images/hero-2.webp" },
    { img: "/images/hero-3.webp" },
    { img: "/images/hero-4.webp" },
    { img: "/images/hero-5.webp" },
    { img: "/images/hero-6.webp" }
];

