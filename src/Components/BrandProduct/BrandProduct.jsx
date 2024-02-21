import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";




const BrandProduct = () => {
    const [brandProducts, setBrandProducts] = useState([])
    const brnd = useLoaderData();
    console.log(brnd)
   const {brand} = useParams();
   console.log(brand)
    useEffect(()=>{
        fetch('/products.json')
        .then(res=>res.json())
        .then(data=>setBrandProducts(data))
    },[])

    
    const selected = brandProducts.filter(b=>(console.log(b.brand)))
    return (
        <div>
            <h4>hi im product</h4>
        </div>
    );
};

export default BrandProduct;