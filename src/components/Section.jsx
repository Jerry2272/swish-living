import React from "react";
import ProductCard from "./ProductCard";

const Section = ({ title, bgColor, productItem, color }) => {
  return (
    <section style={{ background: bgColor, color: color }} className="py-16 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">{title}</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {productItem.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section;
