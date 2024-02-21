import { useEffect, useState } from "react";

import ShopCard from "./ShopCard";

const Shop = () => {
  const [shops, setShops] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setShops(data));
  }, []);
  return (
    <div className="lg:px-28">
      <h4 className="text-[#1A1A1A] font-merriweather text-4xl font-medium tracking-[-0.88px] mb-12">
        Shop by Categories
      </h4>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-2 mb-16">
        {shops.slice(0, 3).map((shop) => (
          <ShopCard key={shop.price} shop={shop} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
