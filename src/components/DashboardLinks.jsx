import { NavLink } from "react-router-dom";


const DashboardLinks = () => {
    return (
        <>
            <div className="py-5 ">
                <div className="join join-vertical gap-y-4 ">
                    <NavLink to="/dashboard/add-marathon" className={({ isActive }) =>
                        isActive
                            ? "text-white btn  border  bg-orange-500"
                            : "text-gray-700 btn border border-orange-500 bg-transparent"
                    }>
                        Add-Marathon
                    </NavLink>
                    <NavLink
                        to="/dashboard/my-marathons"
                        className={({ isActive }) =>
                            isActive
                                ? "text-white btn border bg-orange-500"
                                : "text-gray-700 btn border border-orange-500 bg-transparent"
                        }
                    >
                        My Marathons
                    </NavLink>

                    <NavLink
                        to="/dashboard/my-applications"
                        className={({ isActive }) =>
                            isActive
                                ? "text-white btn border bg-orange-500"
                                : "text-gray-700 btn border border-orange-500 bg-transparent"
                        }
                    >
                        My Applications
                    </NavLink>


                </div>
            </div>
        </>
    );
};

export default DashboardLinks;