
import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";

const BookingCard = ({ book }) => {
    const { _id, product_name, brand_name, image } = book;
    const { loading } = useContext(AuthContext)
    const handleDelete = (_id) => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to delete this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            fetch(`https://brand-shop-server-gamma-indol.vercel.app/bookings/${_id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    if (data.deletedCount > 0) {
{loading}
                        if (result.isConfirmed) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success",
                            });
                        }
                    }
                });
        });
    };
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
                            <Link to={`/updateProd/${_id}`}

                                className="btn btn-outline btn-success"
                            >
                                Update
                            </Link>
                            <button
                                onClick={() => handleDelete(_id)}
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
