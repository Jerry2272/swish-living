import React from 'react'
import { slideData } from '../utils/slideData';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const HeroSlider = () => {
      const heroSettings = {
    infinite: true,
    speed: 5000,
    fade: true,
    autoplay: true,
    arrows: false,
     autoplaySpeed: 5000
  };

  return (
    <div>
         <Slider {...heroSettings}>
        {slideData.map((slide, i) => (
          <div key={i}>
            <section
              id="home"
              aria-label={slide.title}
              className="h-screen flex items-center px-4 md:px-24 bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.90) 10%, rgba(213, 191, 167, 0.50) 100%), url(${slide.img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="text-white space-y-6 max-w-3xl animate-fade-in-up">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">{slide.title}</h1>
                <p className="text-lg md:text-2xl">{slide.description}</p>
                <a
                  href="https://api.whatsapp.com/send?phone=%2B2349110586300"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 rounded-lg bg-gradient-to-r from-[#d5bfa7] to-[#000000]
)
 text-white px-6 py-3 font-medium shadow-md hover:shadow-lg transition"
                >
                  Start Your Shopping
                </a>
              </div>
            </section>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default HeroSlider
