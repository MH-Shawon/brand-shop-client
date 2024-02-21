import { Link } from "react-router-dom";
import proPic from '../../assets/Images/products/p1.png'
const ProductsCard = ({product}) => {
    const {name,price, image}= product;
  return (
    <div className=" flex items-center flex-col text-gray-700 bg-white">
      <div className=" flex items-center justify-center mt-4 text-gray-700 bg-[#E9E3DD] bg-clip-border  h-[285px] w-[230px]">
        <img
                  src={image}
          alt="card-image"
          className="object-cover w-full h-full"
        />
      </div>
          <div className="mt-10 text-[rgba(0, 0, 0, 0.90)] text-center  font-poppins">
        <div>
                  <p className=" text-base antialiased font-medium leading-relaxed ">
            {name}
          </p>
                  <p className="mt-4 text-2xl">{price}</p>
        </div>
        
      </div>
      <div className=" mt-5 mb-24">
              <Link to='/shop'>
                  <button className="h-[40px] w-[198px] font-poppins text-white bg-[#51994B]">Shop Now</button>
              </Link>
      </div>
    </div>
  );
};

export default ProductsCard;
