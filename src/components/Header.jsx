import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { BsMoon } from 'react-icons/bs';
import { TiWeatherSunny } from 'react-icons/ti';

const Header = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const [darkMode, setDarkMode] = useState(true);


    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.documentElement.setAttribute(
          "data-theme",
          darkMode ? "dark" : "light"
        );
      };

    const links = user && user?.email ? (
        <>
            <li>
                <NavLink to="/" className={({ isActive }) =>
                    isActive
                        ? "text-orange-500 border-b-2 border-orange-500 bg-transparent"
                        : "text-gray-700 hover:border-b-2 hover:border-orange-500 bg-transparent"
                }>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/marathons" className={({ isActive }) =>
                    isActive
                        ? "text-orange-500 border-b-2 border-orange-500 bg-transparent"
                        : "text-gray-700 hover:border-b-2 hover:border-orange-500 bg-transparent"
                }>
                    Marathons
                </NavLink>
            </li>
            <li>
                <NavLink to="/dashboard" className={({ isActive }) =>
                    isActive
                        ? "text-orange-500 border-b-2 border-orange-500 bg-transparent"
                        : "text-gray-700 hover:border-b-2 hover:border-orange-500 bg-transparent"
                }>
                    Dashboard
                </NavLink>
            </li>
        </>
    ) : (
        <>
            <li>
                <NavLink to="/" className={({ isActive }) =>
                    isActive
                        ? "text-orange-500 border-b-2 border-orange-500 bg-transparent"
                        : "text-gray-700 hover:border-b-2 hover:border-orange-500 bg-transparent"
                }>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/marathons" className={({ isActive }) =>
                    isActive
                        ? "text-orange-500 border-b-2 border-orange-500 bg-transparent"
                        : "text-gray-700 hover:border-b-2 hover:border-orange-500 bg-transparent"
                }>
                    Marathons
                </NavLink>
            </li>
            <li>
                <NavLink to="/about" className={({ isActive }) =>
                    isActive
                        ? "text-orange-500 border-b-2 border-orange-500 bg-transparent"
                        : "text-gray-700 hover:border-b-2 hover:border-orange-500 bg-transparent"
                }>
                    About
                </NavLink>
            </li>
        </>
    );

    return (
        <>
            <div>
                <div className="navbar ">
                    <div className="navbar-start md:pl-3">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                {links}
                            </ul>
                        </div>
                        <div className="text-lg md:text-xl  ">Marathon-<span className='text-orange-600'>X</span></div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {links}
                        </ul>
                    </div>
                    <div className="navbar-end md:pr-3">
                        <button
                            className="text-2xl cursor-pointer text-base-content btn hover:bg-base-300 btn-circle btn-ghost hover:text-orange-500"
                            onClick={toggleDarkMode}
                        >
                            {darkMode ? <BsMoon /> : <TiWeatherSunny />}
                        </button>
                        {user && user?.email ? (
                            // User is logged in
                            <div className="flex items-center space-x-2 ">
                                <img
                                    className="h-12 w-12 rounded-full cursor-pointer"
                                    src={user.photoURL}
                                    alt="user"
                                />
                                <button
                                    className="btn bg-orange-500 text-white font-bold py-2 px-4 rounded-md"
                                    onClick={signOutUser}
                                >
                                    Logout
                                </button>
                            </div>
                        ) : (
                            // User is not logged in
                            <div className="join ">
                                <NavLink
                                    to="/login"
                                    className={({ isActive }) =>
                                        `btn  join-item ${isActive ? "bg-orange-500 text-white " : "text-white bg-gray-400"}`
                                    }
                                >
                                    Login
                                </NavLink>
                                <NavLink
                                    to="/register"
                                    className={({ isActive }) =>
                                        `btn join-item ${isActive ? "bg-orange-500 text-white" : "text-white bg-gray-400"}`
                                    }
                                >
                                    Register
                                </NavLink>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
