import { useLoaderData, useParams } from "react-router-dom";


const ProductDetails = () => {
    // const {id} = useParams();
    const ProductDetails = useLoaderData()
    console.log(ProductDetails)
    
    return (
        <div>
            <h5>this my product details:</h5>
        </div>
    );
};

export default ProductDetails;