import { useLoaderData } from "react-router-dom";
import BookingCard from "./BookingCard";
import { useState } from "react";
import Swal from "sweetalert2";


const MyCart = () => {
    const book = useLoaderData();
const [bookings,setBookings] = useState(book)

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
            fetch(
                `https://brand-shop-server-gamma-indol.vercel.app/bookings/${_id}`,
                {
                    method: "DELETE",
                }
            )
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);

                    if (data.deletedCount > 0) {
                        
                        if (result.isConfirmed) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success",
                            });
                        }
                        const remaining = bookings.filter(booksPr0do=>booksPr0do._id!==_id) 
                        setBookings(remaining)
                    }
                });
            
        });
    };
    

    return (
        <div>
            <p className="text-center"> {bookings.length}</p>
            {
                bookings.map(book=><BookingCard key={book._id} handleDelete={handleDelete} book={book} />)
            }
        </div>
    );
};

export default MyCart;