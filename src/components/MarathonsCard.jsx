import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const MarathonsCard = () => {
    const [marathons, setMarathons] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://marathon-x-server.vercel.app/marathons/limited')
            .then(res => {
                console.log(res.data);
                setMarathons(res.data);
            })
            .catch(error => {
                console.error("Error fetching marathons:", error);
            });
    }, []);

    const handleSeeDetails = (id) => {
        navigate(`/marathon/${id}`);
    };

    return (
        <div className="mt-8">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
                    <span className="text-orange-700">Upcoming </span> Marathon Events
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 p-2">
                    {marathons.map((marathon) => (
                        <div key={marathon._id} className="card bg-base-100 shadow-xl p-4 text-center rounded-lg">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }} className="card-body">
                                <h3 className="text-xl font-semibold mb-3">{marathon.title}</h3>
                                <p className="text-gray-600">Location: {marathon.location}</p>
                                <p className="text-gray-600">
                                    <strong>Registration Dates:</strong> {new Date(marathon.startRegDate).toLocaleDateString()} - {new Date(marathon.endRegDate).toLocaleDateString()}
                                </p>
                                <div className="card-actions mt-4">
                                    <button
                                        className="btn bg-orange-500 hover:bg-orange-600 text-white text-lg w-full py-2 rounded-md font-bold"
                                        onClick={() => handleSeeDetails(marathon._id)}
                                    >
                                        View Details
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MarathonsCard;
