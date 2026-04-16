import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
    const location = useLocation();
    
 
    const isDetailsPage = location.pathname.includes('/details');

    return (
        <div>
            <Navbar />
            <div className="min-h-[calc(100vh-200px)]">
                <Outlet />
            </div>
            
             <Footer />
        </div>
    );
};

export default MainLayout;