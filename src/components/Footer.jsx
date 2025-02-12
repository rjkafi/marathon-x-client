import React from 'react';

const Footer = () => {
    return (
        <>
            <footer className="bg-gray-800 text-gray-300 py-8">
                {/* Main Footer Section */}
                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About Section */}
                    <div>
                        <h3 className="text-xl font-bold text-white border-b-2 border-red-500 inline-block pb-2">Marathon-X</h3>
                        <p className="mt-4 text-gray-400">
                        Marathon-X is your trusted platform for managing marathon events, connecting organizers with participants, and ensuring a seamless race day experience. Join us to explore and create amazing marathon opportunities.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold text-white border-b-2 border-red-500 inline-block pb-2">Quick Links</h3>
                        <ul className="mt-4 space-y-2">
                            <li><a href="/" className="hover:text-white">Home</a></li>
                            <li><a href="/marathons" className="hover:text-white">All Marathons</a></li>
                            <li><a href="/dashboard/my-marathons" className="hover:text-white">My Marathons</a></li>
                            <li><a href="/dashboard/my-applications" className="hover:text-white">My Applications</a></li>
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div>
                        <h3 className="text-xl font-bold text-white border-b-2 border-red-500 inline-block pb-2">Contact Us</h3>
                        <ul className="mt-4 space-y-2 text-gray-400">
                            <li>Email: <a href="mailto:support@marathonx@gmail.com" className="hover:text-white">support@marathon-x.com</a></li>
                            <li>Phone: <a href="tel:+1234567890" className="hover:text-white">+1 (234) 567-890</a></li>
                            <li>Address: 456 Marathon Way, Event City</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Footer Section */}
                <div className="mt-8 border-t border-gray-700 pt-4 text-center">
                    <p>&copy; {new Date().getFullYear()} Marathon-X. All rights reserved.</p>
                   
                </div>
            </footer>
        </>
    );
};

export default Footer;
