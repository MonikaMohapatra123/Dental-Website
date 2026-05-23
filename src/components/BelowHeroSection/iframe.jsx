
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const movies = [
  { title: "Movie 1", url: "https://www.youtube.com/embed/YQRNVB_83Zg" },
  { title: "Movie 2", url: "https://www.youtube.com/embed/92e-gysLlDw" },
  { title: "Movie 3", url: "https://www.youtube.com/embed/YQRNVB_83Zg" },
  { title: "Movie 4", url: "https://www.youtube.com/embed/92e-gysLlDw" },
  { title: "Movie 5", url: "https://www.youtube.com/embed/YQRNVB_83Zg" },
  { title: "Movie 6", url: "https://www.youtube.com/embed/92e-gysLlDw" },
  { title: "Movie 7", url: "https://www.youtube.com/embed/92e-gysLlDw" },
];

const IframeSlider = () => {
  return (
    <div style={{ width: "80%", margin: "auto", textAlign: "center" }}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={3} // Default setting (for larger screens)
        navigation
        loop={true} // Enables circular looping
        centeredSlides={true}
        breakpoints={{
          320: { // Mobile screens
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: { // Tablets
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: { // Desktops
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        {movies.map((movie, index) => (
          <SwiperSlide key={index} style={{ display: "flex", justifyContent: "center" }}>
            <iframe
              width="300"
              height="300"
              src={movie.url}
              title={movie.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ borderRadius: "50%" }}
            ></iframe>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Bootstrap for the arrows */}
      <style jsx>{`
        .swiper-button-next, .swiper-button-prev {
          color: black !important; /* Override arrow color */
        }
        .swiper-button-next, .swiper-button-prev {
          font-size: 2rem;  /* You can adjust the size of the arrows */
        }
      `}</style>
    </div>
  );
};

export default IframeSlider;
