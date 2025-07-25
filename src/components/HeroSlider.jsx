import React from 'react';
import { slideData } from '../utils/slideData';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HeroSlider = () => {
  const heroSettings = {
    infinite: true,
    speed: 1000,
    fade: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 5000,
  };

  return (
    <div className="relative">
      <Slider {...heroSettings}>
        {slideData.map((slide, i) => (
          <div key={i}>
            <section
              id="home"
              aria-label={slide.title}
              className="h-[85vh] md:h-screen text-center md:text-left lg:text-left flex items-center justify-start px-6 md:px-20 text-white bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.3)), url(${slide.img})`,
              }}
            >
              <div className="max-w-2xl space-y-5 animate-fade-in-up">
                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-wide">
                  {slide.title}
                </h1>
                <p className="text-base md:text-xl font-light">
                  {slide.description}
                </p>
                <a
                  href="https://api.whatsapp.com/send?phone=+2349110586300"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block bg-[#63412b] text-white hover:bg-black hover:text-white transition px-6 py-3 rounded-lg  font-medium shadow-lg"
                >
                  Start Your Shopping
                </a>
              </div>
            </section>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider;
