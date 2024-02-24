import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import BrandSlider from "./BrandSlider";
import BrandProductCard from "./BrandProductCard";




const BrandCategory = () => {

    const [brandProducts, setBrandProducts] = useState([])
    const { brand } = useParams();

    useEffect(() => {
        fetch('https://brand-shop-server-nine-omega.vercel.app/products')
            .then(res => res.json())
            .then(data => setBrandProducts(data))
    }, [])


    const selectedBrand = brandProducts.filter(b => (b.brand === brand))
    return (
        <div>
            <div>
                <BrandSlider />
            </div>
            <h5 className="text-center m-8 font-merriweather font-semibold text-3xl tracking-[-1.4px]">Product of <span className="text-violet-700">{brand}</span></h5>
            <div className="lg:px-20 grid md:grid-cols-4 grid-cols-1 gap-5">
                {
                    selectedBrand.map(brand => <BrandProductCard key={brand._id} brandName={brand} />)
                }
            </div>

        </div>
    );
};

export default BrandCategory;