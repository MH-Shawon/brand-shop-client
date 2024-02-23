import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';
import { Link } from "react-router-dom";




const BrandProductCard = ({brandName}) => {
    const{_id,image, name, brand,price,rating} = brandName;
    return (
        <div className="flex flex-col text-gray-700 bg-white border-2 shadow-xl mb-10 p-2">
            <div className="flex items-center justify-center mt-4 text-gray-700 bg-[#E9E3DD] bg-clip-border  h-[285px] w-[230px]">
                <img
                    src={image}
                    alt="card-image" className="object-cover w-full h-full" />
            </div>
            <div className="mt-3">
                <div className="flex items-center justify-between mb-2">
                    <p className="font-poppins text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                        {name}
                    </p>
                    <p className="font-merriweather text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                        {price}
                    </p>
                </div>
                <div className="flex justify-between mt-5">
                    <p className="block font-merriweather text-sm antialiased font-normal leading-normal text-gray-900 opacity-75 mb-2">
                        {brand}
                    </p>
                    <p><Rating
                        style={{ maxWidth: 90 }}
                        value={rating}
                        readOnly
                    /></p>
                </div>
            </div>
            <div className="flex gap-4  mt-5 mb-5">
                <Link to={`/productsDetails/${_id}`} className="h-[40px] w-1/2 font-poppins text-white bg-[#51994B] flex items-center justify-center">
                    Details
                </Link>
                <Link className="h-[40px] w-1/2 font-poppins text-white bg-[#51994B] flex items-center justify-center">
                    Update
                      </Link>
                
                    
                
            </div>
        </div>

    );
};

export default BrandProductCard;