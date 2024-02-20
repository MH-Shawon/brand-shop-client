import { Outlet } from "react-router-dom";
import Navbar from "../Components/Home/Shared/Navbar/Navbar";
import Footer from "../Components/Home/Shared/Footer/Footer";
import { Toaster } from "react-hot-toast";


const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
            <Toaster />
        </div>
    );
};

export default MainLayout;