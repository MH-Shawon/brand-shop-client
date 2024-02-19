
import { Link } from "react-router-dom";
import banner2 from "../../assets/Images/banner/banner2.jpg";
import { IoIosGlobe } from "react-icons/io";
import { MdOutlineCleanHands } from "react-icons/md";
import { FaRegSmileBeam } from "react-icons/fa";


const Banner = () => {
    return (
        <div>
            <div
                className="hero mt-2.5 min-h-[501px]"
                style={{ backgroundImage: `url(${banner2})` }}
            >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-7 text-6xl font-merriweather font-medium tracking-[-1.408px]">
                            Look within yourself <br /> and discover
                        </h1>
                        <p className="mb-14">
                            It is a long established fact that a reader will be distracted <br /> by
                            the readable content of a page when.
                        </p>
                        <Link to='/shop'>
                            <button className="h-[46px] w-[198px] font-poppins  bg-[#51994B]">View Collection</button>
                        </Link>

                    </div>
                </div>


            </div>
            <div className="text-center mt-[50px] mx-auto w-[1064px] h-[162px] font-merriweather font-medium text-4xl tracking-[-1.056px] text-[#251D18]">
                Our natural skincare products are crafted with
                cutting-edge green science and innovative ingredients
                to provide the ultimate luxury skincare experience
            </div>
            <div className="flex lg:px-[220px] mr-[106px] mt-10 mb-[50px] w-full">
                <div className="flex items-center justify-center w-1/3">
                    <span className="mr-1.5 "><IoIosGlobe className="text-4xl" /></span>
                    <span className="w-32 "> Long-lasting and sustainable</span>
                </div>
                <div className="flex items-center justify-center w-1/3">
                    <span className="mr-1.5"><MdOutlineCleanHands className="text-4xl" /></span>
                    <span className="w-32 "> Lovingly crafted for all bodies</span>
                </div>
                <div className="flex items-center justify-center w-1/3">
                    <span className="mr-1.5"><FaRegSmileBeam className="text-4xl" /></span>
                    <span className="w-32 "> Unbeatably comfortable</span>
                </div>


            </div>
        </div>

    );
};

export default Banner;
