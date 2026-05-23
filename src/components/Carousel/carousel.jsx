

// import"./carousel.css";
// import React, { useState, useEffect } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import componentsData from "../../json/component.json"; // Import JSON directly

// export function Carousel() {
//     const [windowWidth, setWindowWidth] = useState(window.innerWidth);
//     const [carouselData, setCarouselData] = useState([]);

//     useEffect(() => {
//         const handleResize = () => {
//             setWindowWidth(window.innerWidth);
//         };
//         window.addEventListener("resize", handleResize);

//         return () => {
//             window.removeEventListener("resize", handleResize);
//         };
//     }, []);

//     useEffect(() => {
//         // Find the "Carousel" component from JSON
//         const carouselComponent = componentsData.components.find(comp => comp.name === "Carousel");
//         if (carouselComponent && carouselComponent.images) {
//             setCarouselData(carouselComponent.images);
//         }
//     }, []);

//     const settings = {
//         dots: false,
//         infinite: true,
//         speed: 600,
//         slidesToShow: windowWidth <= 676 ? 2 : 5,
//         slidesToScroll: windowWidth <= 676 ? 1 : 3,
//         autoplay: true,
//         autoplaySpeed: 1000,
//     };

//     return (
//         <div className="carousel">
//             <h4 className="advance-procedure" style={{ marginTop: "110px", fontSize: "35px", fontWeight: "bold", padding: "20px", whiteSpace: "nowrap" }}>
//                Advanced Procedures
//             </h4>
//             <Slider {...settings}>
//                 {carouselData.map((image, index) => (
//                     <div key={index}>
//                         <img src={image.src} alt={image.alt || `Slide ${index}`} width="200" height="200" />
//                     </div>
//                 ))}
//             </Slider>
//         </div>
//     );
// }
import "./carousel.css";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import componentsData from "../../json/component.json"; // Import JSON directly

export  function Carousel() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [carouselData, setCarouselData] = useState([]);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        // Find the "Carousel" component by ID (5) from JSON
        const carouselComponent = componentsData.components.find(comp => comp.id === 5);
        console.log(carouselComponent);
        console.log(carouselComponent.id);
       
        if (carouselComponent?.images) {
            setCarouselData(carouselComponent.images);
        }
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: windowWidth <= 676 ? 2 : 5,
        slidesToScroll: windowWidth <= 676 ? 1 : 3,
        autoplay: true,
        autoplaySpeed: 1000,
    };

    return (
        <div className="carousel">
            <h4 className="advance-procedure" style={{ marginTop: "110px", fontSize: "35px", fontWeight: "bold", padding: "20px", whiteSpace: "nowrap" }}>
               Advanced Procedures
            </h4>
            <Slider {...settings}>
                {carouselData.map((image, index) => (
                    <div key={index}>
                        <img src={image.src} alt={image.alt || `Slide ${index}`} width="200" height="200" />
                    </div>
                ))}
            </Slider>
        </div>
    );
}
