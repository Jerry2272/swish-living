import React from "react";
import { productItem } from "../src/utils/bestsellingData";
import { relatedProducts } from "../src/utils/relatedProducts";
import ProductCard from "../src/components/ProductCard";

const Product = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto bg-white shadow-md rounded-md">
      {/* Main Products Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {productItem.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>

      {/* Related Products Section */}
      <section>
        <h3 className="text-xl font-semibold mb-6 text-gray-700">Related Products</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {relatedProducts.map((related) => (
            <ProductCard key={related.id} product={related} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Product;
