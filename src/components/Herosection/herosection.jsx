import { motion } from "framer-motion";
import React from "react";
import "./HeroSection.css";
import heroDataJson from "../../json/component.json";

const HeroSection = () => {
  const heroData = heroDataJson.components.find(({ id }) => id === 1);
  console.log(heroData);
  console.log(heroData.id);

  if (!heroData) return <div>Error: Data not found</div>;
  return (
    <div className="hero-container">
      <nav className="hero-sectionnav">
        <span>{heroData.phone}</span>
        <button>{heroData.buttonText}</button>
      </nav>
      <motion.section 
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="hero-text"
      >
        <h1>{heroData.heading}</h1>
        <p>{heroData.subheading}</p>
      </motion.section>

      <div className="image-slider">
        <div className="slider-track">
          {heroData.images.map((image, index) => (
            <img key={index} src={image} alt={`Slide ${index + 1}`} />
          ))}

          {/* Duplicate Images for Smooth Infinite Scrolling */}
          {heroData.images.map((image, index) => (
            <img key={`dup-${index}`} src={image} alt={`Slide ${index + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;