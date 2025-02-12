import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const Marathons = () => {
    const [marathons, setMarathons] = useState([]);
    const [sortOrder, setSortOrder] = useState("desc"); 
    const navigate = useNavigate();

    // Fetch marathons data with sorting
    useEffect(() => {
        const fetchMarathons = async () => {
            try {
                const response = await axios.get(`https://marathon-x-server.vercel.app/marathons`, {
                    params: { sortOrder }, 
                });
                const data = response.data;
                console.log(data); 
                setMarathons(data);
            } catch (error) {
                console.error("Error fetching marathons:", error);
            }
        };

        fetchMarathons();
    }, [sortOrder]); 

    // Handle sort order change
    const handleSortChange = (e) => {
        setSortOrder(e.target.value); 
    };

    return (
        <>
        <div>
            <Helmet>
                <title> Marathons || Marathon-x</title>
            </Helmet>
        </div>
        <div className="max-w-7xl mx-auto p-6">
            <h2 className="text-3xl font-bold mb-6 text-center">All Marathons</h2>

            {/* Sorting option */}
            <div className="flex justify-end mb-4">
                <label htmlFor="sortOrder" className="mr-2">Sort by:</label>
                <select
                    id="sortOrder"
                    onChange={handleSortChange}
                    value={sortOrder}
                    className="border p-2 rounded"
                >
                    <option value="desc">Newest First</option>
                    <option value="asc">Oldest First</option>
                </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {marathons.length > 0 ? (
                    marathons.map((marathon) => (
                        <div
                            key={marathon._id}
                            className="bg-white shadow-lg rounded-lg overflow-hidden"
                        >
                            <img
                                src={marathon.image}
                                alt={marathon.title}
                                className="w-full h-40 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-bold mb-2">{marathon.title}</h3>
                                <p className="text-gray-600 mb-2">
                                    <strong>Location:</strong> {marathon.location}
                                </p>
                                <p className="text-gray-600 mb-2">
                                    <strong>Registration:</strong> {new Date(marathon.startRegDate).toLocaleDateString()} - {new Date(marathon.endRegDate).toLocaleDateString()}
                                </p>
                                <button
                                    onClick={() => navigate(`/marathon/${marathon._id}`)}
                                    className="mt-4 bg-orange-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                                >
                                    See Details
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center col-span-full">No marathons available.</div>
                )}
            </div>
        </div>
        </>
    );
};

export default Marathons;
