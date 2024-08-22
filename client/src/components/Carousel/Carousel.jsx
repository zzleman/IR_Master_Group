import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'; 
import "./Carousel.scss"
const Carousel = () => {
  const images = [
    '/img/pic1.jpg',
    '/img/pic2.jpg',
    '/img/pic3.jpg',
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
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} className="mt-24 overflow-hidden">
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            style={{ width: '100%', height: '600px', objectFit: 'cover' }}
          />
        </div>
      ))}
    </Slider>
  );
  
};

export default Carousel;
