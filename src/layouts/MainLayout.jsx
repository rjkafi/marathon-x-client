import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = () => {
    return (
        <>
          <div className=' sticky top-0 z-50 bg-base-300 bg-opacity-90 backdrop-blur-lg'>
            <Header></Header>
            </div>
        <div>
            <Outlet className="min-h-screen"></Outlet>  
        </div>
        <Footer></Footer>
        </>
    );
};

export default MainLayout;