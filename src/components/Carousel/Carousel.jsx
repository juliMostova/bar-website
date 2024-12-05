import React from 'react';
import './CarouselStyle.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Carousel({images}) {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
      };
  return (
    <Slider {...settings} className="carousel">
    {images.map((image, index) => (
      <div key={index} className="carousel-slide">
        <img src={image} alt={`Slide ${index + 1}`} />
      </div>
    ))}
  </Slider>
  )
}

export default Carousel;
