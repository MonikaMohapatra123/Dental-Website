
import React, { useEffect, useRef } from "react";
import"./imgslide.css";
const AutoScrollCarousel = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        let scrollY = window.scrollY;
        let itemWidth = 410; // Item width including margin
       
        let index = Math.floor(scrollY / 100); // Adjust scrolling speed
        
        // Prevent overflow
        const maxScroll = (carouselRef.current.children.length - 1) * itemWidth;
        const newScrollX = Math.min(index * itemWidth, maxScroll);
        
        carouselRef.current.style.transform = `translateX(-${newScrollX}px)`;
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div>
        
      <div className="carousel-wrapper">
      
        <div className="carousel-container" ref={carouselRef}>
          <div className="carousel-item">
            <img src="/images/machine-1.webp" alt="Slide 1" className="carousel-image"/>
            <p className="carousel-text">3D Intra Oral Scanning</p>
          </div>
          <div className="carousel-item">
            <img src="/images/machine-2.webp" alt="Slide 2" className="carousel-image"/>
            <p className="carousel-text">Single Visit Clinic</p>
          </div>
          <div className="carousel-item">
            <img src="/images/machine-3.webp" alt="Slide 3" className="carousel-image"/>
            <p className="carousel-text">Microscope Assisted Root canal</p>
          </div>
          <div className="carousel-item">
            <img src="/images/machine-4.webp" alt="Slide 4" className="carousel-image"/>
            <p className="carousel-text">Laser Dentistry</p>
          </div>
          <div className="carousel-item">
            <img src="/images/machine-5.webp" alt="Slide 4" className="carousel-image"/>
            <p className="carousel-text">3D Image with CBCT Scan </p>
          </div>
        </div>
      </div>
      <div className="spacer" /> //Extra space to allow scrolling




      <div className="res-carousel-wrapper">
      
        <div className="carousel-container" >
          <div className="carousel-item">
            <img src="/images/machine-1.webp" alt="Slide 1" className="carousel-image"/>
            <p className="carousel-text">3D Intra <br/>Oral Scanning</p>
          </div>
          <div className="carousel-item">
            <img src="/images/machine-2.webp" alt="Slide 2" className="carousel-image"/>
            <p className="carousel-text">Single Visit Clinic</p>
          </div>
          <div className="carousel-item">
            <img src="/images/machine-3.webp" alt="Slide 3" className="carousel-image"/>
            <p className="carousel-text">Microscope <br/> Assisted  <br/>Root canal</p>
          </div>
          <div className="carousel-item">
            <img src="/images/machine-4.webp" alt="Slide 4" className="carousel-image"/>
            <p className="carousel-text">Laser Dentistry</p>
          </div>
          <div className="carousel-item">
            <img src="/images/machine-5.webp" alt="Slide 4" className="carousel-image"/>
            <p className="carousel-text">3D Image with <br/> CBCT Scan </p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default AutoScrollCarousel;








