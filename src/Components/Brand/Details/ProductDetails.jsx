import { Rating } from "@smastrom/react-rating";
import { Link, useLoaderData} from "react-router-dom";
import "@smastrom/react-rating/style.css";

const ProductDetails = () => {
  const products = useLoaderData();
  
  const {_id, image, name, brand, rating, short_description, price } = products;
  
  

  

  return (
    <div>
      <h4 className="text-center font-merriweather font-medium text-2xl mt-10">
        See the details....
      </h4>

      
        <div className="w-full mx-auto max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-10 mb-10">
          <img
            className="p-8 flex items-center justify-center rounded"
            src={image}
            alt="product image"
          />

          <div className="px-5 pb-5 space-y-2">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>
            <h4 className="text-lg font-poppins tracking-tight text-gray-900 dark:text-white">
              Brand: {brand}
            </h4>

            <p className="flex gap-1">
              <p>Rating:</p>
              <Rating style={{ maxWidth: 90 }} value={rating} readOnly />
            </p>
            <p className="font-poppins">{short_description}</p>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white mt-5">
                {price}
              </span>
            <Link to={`/book/${_id}`}>

              <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5">
                Add to cart
              </button>
              </Link>

              
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default ProductDetails;
