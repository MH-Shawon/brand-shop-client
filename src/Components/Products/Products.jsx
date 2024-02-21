import { useEffect, useState } from "react";

import ProductsCard from "./ProductsCard";

const Products = () => {
  

  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => {
        setProducts(data)
      })
  }, [])
  return (
    <div>
      <h5 className="text-center mt-[50px] font-merriweather font-medium text-[64px] tracking-[-1.408px] text-[#060606]">
        Our Featured Products
      </h5>
      <div className="lg:px-20 grid md:grid-cols-4 grid-cols-1">
        {
          products.slice(0, 4).map(product => <ProductsCard key={product.name} product={product}></ProductsCard>)
        }
      </div>
    </div>
  );
};

export default Products;
