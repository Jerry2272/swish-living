import React from "react";
import ProductCard from "./ProductCard";
import Carousel from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Section = ({ title, bgColor, productItem, color }) => {

const settings = {
  slidesToShow: 3.1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  arrows: true,
  infinite: true,
  centerMode: true,
  centerPadding: "40px", // Desktop default: tighter
  margin: '50px',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2.2,
        centerPadding: "16px", // Medium screen
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1.5,
        centerPadding: "12px", // Tablet view
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1.1,
        centerPadding: "8px", // Small phones
        arrows: false,
      },
    },
  ],
};




  return (
    <section style={{ background: bgColor, color: color }} className="py-16 px-4 md:px-[7em]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">{title}</h2>
        <div className="">

          <Carousel {...settings}>
                  {productItem.map((product) => (
                 <ProductCard key={product.id} product={product} />
                  ))}
                </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Section;
