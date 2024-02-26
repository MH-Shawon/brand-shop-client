import { useLoaderData } from "react-router-dom";
import BookingCard from "./BookingCard";


const MyCart = () => {
    const bookings = useLoaderData();
    
    return (
        <div>
            <p className="text-center"> {bookings.length}</p>
            {
                bookings.map(book=><BookingCard key={book._id} book={book} />)
            }
        </div>
    );
};

export default MyCart;