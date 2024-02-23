import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { Rating } from "@smastrom/react-rating";
import toast from "react-hot-toast";

const AddToCart = () => {
    const products = useLoaderData();

    const { _id, image, name, brand, rating, short_description, price } =
        products;

    const { user } = useContext(AuthContext);

    const handleAddToCart = (event) => {
        event.preventDefault();

        const booking = {
            image,
            product_name: name,
            brand_name: brand,
            rating,
            short_description,
            price,
        };
        fetch("https://brand-shop-server-opal-eight.vercel.app/bookings", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(booking),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    toast.success("Product added successfully..!!")
                }
            });
    };

    return (
        <div>
            <h2 className="text-center text-3xl">Add Product: <span className="text-[#800020] font-merriweather font-medium tracking-[-1.0px]">{name}</span>  </h2>
            <form onSubmit={handleAddToCart}>
                <div className="">
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
                                <div className="form-control mt-6">
                                    <input
                                        className="btn btn-primary btn-block"
                                        type="submit"
                                        value="Order Confirm"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <div className="card-body"></div>
        </div>
    );
};

export default AddToCart;
