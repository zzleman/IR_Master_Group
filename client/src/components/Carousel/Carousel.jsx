import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'; 
import "./Carousel.scss"
const Carousel = () => {
  const images = [
    '/img/slider-6.jpg',
    '/img/slider-1.webp',
    '/img/slider-2.jpeg',
    '/img/slider-3.jpeg',
    '/img/slider-4.jpeg',
    '/img/slider-5.jpeg',
  ];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
};


  return (
    <div className='carousel-container overflow-hidden '>
       <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} className="mt-24 overflow-hidden">
          <img className='w-full h-96 lg:h-[680px] object-cover' src={image} alt={`Slide ${index + 1}`}
          />
        </div>
      ))}
    </Slider>
    </div>
  );
  
};

export default Carousel;
