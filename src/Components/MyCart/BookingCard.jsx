import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const BookingCard = ({ book, handleDelete }) => {
  const { _id, product_name, brand_name, image } = book;
  return (
    <div className="">
      <div className="relative mx-auto h-36  w-full max-w-[36rem]  rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-xl">
        <div className=" flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
          <img
            src={image}
            alt="Tania Andrew"
            className="relative h-[58px] w-[58px] rounded mt-10"
          />
          <div className=" mx-auto mt-10">
            <div className="my">
              <h5 className=" font-poppins text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                {product_name}
              </h5>

              <p className=" font-poppins text-base antialiased font-light leading-relaxed text-blue-gray-900">
                {brand_name}
              </p>
            </div>
          </div>
          <div>
            <div className="flex mt-7 pr-5 space-y-2 flex-col items-center justify-center">
              <Link
                to={`/updateProd/${_id}`}
                className="btn btn-outline btn-success"
              >
                Update
              </Link>
              <button
                onClick={()=>handleDelete(_id)}
                className="btn btn-outline btn-error"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
