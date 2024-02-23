import { useLoaderData } from "react-router-dom";


const MyCart = () => {
    const bookings = useLoaderData();
    console.log(bookings)
    return (
        <div>
            this is my cart
        </div>
    );
};

export default MyCart;