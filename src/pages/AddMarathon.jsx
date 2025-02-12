import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const AddMarathon = () => {
    const [startRegDate, setStartRegDate] = useState(null);
    const [endRegDate, setEndRegDate] = useState(null);
    const [marathonStartDate, setMarathonStartDate] = useState(null);
    const { user } = useContext(AuthContext);
    const userEmail = user?.email;
    const navigate = useNavigate(); // Initialize useNavigate

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const title = form.title.value;
        const location = form.location.value;
        const distance = form.distance.value;
        const description = form.description.value;
        const image = form.image.value;

        // Create the marathon object
        const newMarathon = {
            title,
            startRegDate,
            endRegDate,
            marathonStartDate,
            location,
            distance,
            description,
            image,
            userEmail,
        };

        axios
            .post("https://marathon-x-server.vercel.app/marathons", newMarathon)
            .then((response) => {
                console.log("Marathon added successfully:", response.data);
                Swal.fire({
                    title: "Success!",
                    text: "Marathon has been added successfully!",
                    icon: "success",
                    confirmButtonText: "OK",
                }).then(() => {
                    navigate("/marathons");
                });
            })
            .catch((error) => {
                console.error("Error adding marathon:", error.response ? error.response.data : error.message);
                Swal.fire({
                    title: "Error!",
                    text: error.response ? error.response.data.message : "There was an error adding the marathon. Please try again.",
                    icon: "error",
                    confirmButtonText: "OK",
                });
            });
    };

    return (
        <div className="max-w-4xl mx-auto p-6  shadow-lg rounded-lg mb-4">
            <h2 className="text-2xl font-bold mb-4 text-orange-500">Add Marathon</h2>
            <form onSubmit={handleSubmit}>
                {/* Marathon Title */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Marathon Title</label>
                    <input
                        type="text"
                        name="title"
                        className="w-full border rounded-lg p-2"
                        placeholder="Enter marathon title"
                        required
                    />
                </div>

                {/* Grid Layout for Specific Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Start Registration Date */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Start Registration Date</label>
                        <DatePicker
                            selected={startRegDate}
                            onChange={(date) => setStartRegDate(date)}
                            className="w-full border rounded-lg p-2"
                            placeholderText="Start registration date"
                        />
                    </div>

                    {/* End Registration Date */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">End Registration Date</label>
                        <DatePicker
                            selected={endRegDate}
                            onChange={(date) => setEndRegDate(date)}
                            className="w-full border rounded-lg p-2"
                            placeholderText="End registration date"
                        />
                    </div>

                    {/* Marathon Start Date */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Marathon Start Date</label>
                        <DatePicker
                            selected={marathonStartDate}
                            onChange={(date) => setMarathonStartDate(date)}
                            className="w-full border rounded-lg p-2"
                            placeholderText="Marathon start date"
                        />
                    </div>

                    {/* Location */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Location</label>
                        <input
                            type="text"
                            name="location"
                            className="w-full border rounded-lg p-2"
                            placeholder="Enter location"
                            required
                        />
                    </div>
                </div>

                {/* Running Distance */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Running Distance</label>
                    <select name="distance" className="w-full border rounded-lg p-2" required>
                        <option value="25k">25k</option>
                        <option value="10k">10k</option>
                        <option value="3k">3k</option>
                    </select>
                </div>

                {/* Description */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Description</label>
                    <textarea
                        name="description"
                        className="w-full border rounded-lg p-2"
                        placeholder="Enter description"
                        rows="4"
                        required
                    ></textarea>
                </div>

                {/* Marathon Image */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2"> Marathon Image URL</label>
                    <input
                        type="url"
                        name="image"
                        placeholder="Enter marathon image URL"
                        className="w-full p-2 border rounded-md"
                        required
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddMarathon;
