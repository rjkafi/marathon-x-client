import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../lottie/error.json';
import { Helmet } from 'react-helmet-async';
import { NavLink } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const ErrorPage = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData, 
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice' 
        },
    };

    return (
        <>
        <div>
            <Helmet>
                <title>Error page || Marathon-x</title>
            </Helmet>
        </div>
        <div className='py-20 container mx-auto'>
            <Lottie options={defaultOptions} height={270} width={270} />
            <h3 className="text-5xl font-bold text-center mt-12">
                Page Not Found
            </h3>
            <div className='flex justify-center mt-6'>
                <NavLink className="btn bg-gray-500 text-xl font-bold text-white px-6 py-3 rounded-lg" to='/'>
                 <FaArrowLeft />  Go Back Home
                </NavLink>
            </div>

        </div>

        </>
    );
};

export default ErrorPage;
