import React, { useState, useEffect } from "react";
// Import your local images
import Image1 from "../../assets/bannerpic2.jpg";
import Image2 from "../../assets/bannerpic3.jpg";
import Image3 from "../../assets/bannerpic5.jpg";
import "../styles/Images.css";
// import "../components/styles/Images.css";

const Images = () => {
  // Array of imported images
  const images = [Image1,Image2,Image3];

  // State to keep track of the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next image
  const nextSlide = () => {

    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to go to the previous image
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Automatically change the image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change the image every 3 seconds

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
    <div className="image-main">
      <div className="slideshow-container">
        <button className="arrow prev" onClick={prevSlide}>
          &#10094; {/* Left Arrow */}
        </button>

        <img
          id="slide-img"
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
        />

        <button className="arrow next" onClick={nextSlide}>
          &#10095; {/* Right Arrow */}
        </button>
      </div>
    </div>
  );
};

export default Images;
