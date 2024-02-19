import { Link } from "react-router-dom";
import banner3 from '../../assets/Images/banner/banner3.jpg'

const Banner2 = () => {
    return (
        <div>
            <div className="hero h-[500px] bg-[#251D18] lg:px-[117px]">
                <div className="hero-content flex flex-col justify-between w-full lg:flex-row-reverse text-white">
                    <div className="w-1/2">
                        <img src={banner3} className="w-[600px] h-[365px] rounded-lg shadow-2xl" />
                    </div>
                    
                    <div className="w-1/2 text-center">
                        <h1 className="text-[40px] font-medium font-merriweather">Fab Vitamin C Body Cream For
                            Skin Whitening</h1>
                        <p className="py-6">Vitamin C body creams can contribute to a brighter complexion by reducing dark spots and supporting collagen synthesis. However, consistent use and sun protection are key for optimal results.</p>
                        <Link to='/shop'>
                            <button className="h-[46px] w-[198px] font-poppins  bg-[#51994B]">Shop Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner2;