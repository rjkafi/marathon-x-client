import { Outlet } from "react-router-dom";
import DashboardLinks from "../components/DashboardLinks";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet-async";


const DashBoardLayout = () => {
    return (
        <>
       <div>
       <Helmet>
         <title> Dashboard || Marathon-x</title>
            </Helmet>      
         </div>
            <div className="w-11/12 mx-auto ">
                <Header></Header>
                <ToastContainer position="top-center"></ToastContainer>
                <div className="md:flex gap-x-4 items-start">
                    <DashboardLinks></DashboardLinks>
                    <section className="border border-gray-100 w-full my-4 rounded-md">
                        <div className="py-12 rounded-t-md bg-gradient-to-r mb-4 from-orange-500 to-fuchsia-500">
                            <h4 className="text-center text-white text-4xl font-semibold">Dashboard</h4>
                        </div>

                        <Outlet className="min-h-screen"></Outlet>
                    </section>

                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default DashBoardLayout;