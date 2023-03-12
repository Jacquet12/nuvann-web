import React, { useState, useEffect } from 'react';
import './styles.scss';

type CarouselProps = {
  images: string[];
  autoSlideInterval?: number;
};

const FullWidthCarousel: React.FC<CarouselProps> = ({ images, autoSlideInterval }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, autoSlideInterval);

    return () => clearInterval(interval);
  }, [images.length, autoSlideInterval]);

  // const handlePrevSlide = () => {
  //   setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  // };

  // const handleNextSlide = () => {
  //   setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  // };

  return (
    <div className="carousel">
      <div className="carousel__slider" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="carousel__slide">
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      {/* <button className="carousel__prev-btn" onClick={handlePrevSlide}>
        &lt;
      </button>
      <button className="carousel__next-btn" onClick={handleNextSlide}>
        &gt;
      </button> */}
    </div>
  );
};

export default FullWidthCarousel;
