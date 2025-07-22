import React from "react"; 
import { productItem } from "../src/utils/bestsellingData";
import ProductCard from "../src/components/ProductCard";
import { relatedProducts } from "../src/utils/relatedProducts";

const Product = () => {

  return ( 
       <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Product Details</h2> 
      <div className="grid grid-cols-3 gap-[30px]">

       {
        productItem.map((item) => {
          return (
            <ProductCard key={item.id} product={item} />
          )
        })
       }
       {
        relatedProducts.map((related) => {
          return (
          <ProductCard key={related.id} product={related} />
          )
        })
       }

      </div>
    </div>
  );
};

export default Product;
