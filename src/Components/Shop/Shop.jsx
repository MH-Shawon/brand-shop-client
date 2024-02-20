import { useLoaderData } from "react-router-dom";

const Shop = () => {
  const products = useLoaderData();
  console.log(products);
  return (
    <div>
      <h5 className="text-center mt-[50px] font-merriweather font-medium text-[64px] tracking-[-1.408px] text-[#060606]">
        Our Featured Products
      </h5>
      <div>
        {
            products.map(product=><li>{product.brand}</li>)
        }
      </div>
    </div>
  );
};

export default Shop;
