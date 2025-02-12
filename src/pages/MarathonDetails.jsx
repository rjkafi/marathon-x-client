import { useLoaderData, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const MarathonDetails = () => {
    const marathon = useLoaderData();
    const { user } = useContext(AuthContext);
    const [registrationCount, setRegistrationCount] = useState(marathon.registrationCount);

    const isRegistrationOpen =
        new Date(marathon.startRegDate) <= new Date() &&
        new Date(marathon.endRegDate) >= new Date();
    const marathonStartDate = new Date(marathon.startDate);
    const navigate = useNavigate();

    const handleRegistrationSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;

        const registrationData = {
            email: form.email.value,
            firstName: form.firstName.value,
            lastName: form.lastName.value,
            contactNumber: form.contactNumber.value,
            additionalInfo: form.additionalInfo.value,
            marathonId: marathon._id,
            marathonTitle: marathon.title,
            startDate: marathon.startDate,
        };

        // Submit registration details to the server
        const response = await fetch("https://marathon-x-server.vercel.app/register-marathon", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(registrationData),
        });

        if (response.ok) {
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Marathon Registration successful!",
                showConfirmButton: false,
                timer: 1500,
            });
            setRegistrationCount((prev) => prev + 1);
            form.reset();
            navigate("/dashboard/my-applications");
        } else {
            alert("Registration failed. Please try again.");
        }
    };

    // Countdown renderer function
    const renderTime = ({ remainingTime }) => {
        const days = Math.floor(remainingTime / (60 * 60 * 24));
        const hours = Math.floor((remainingTime % (60 * 60 * 24)) / (60 * 60));
        const minutes = Math.floor((remainingTime % (60 * 60)) / 60);
        return (
            <div className="text-center">
                <div className="text-4xl font-bold">{days}</div>
                <div className="text-sm">Days</div>
                <div className="text-4xl font-bold">{hours}</div>
                <div className="text-sm">Hours</div>
                <div className="text-4xl font-bold">{minutes}</div>
                <div className="text-sm">Minutes</div>
            </div>
        );
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-3xl font-bold mb-4">{marathon.title}</h2>
            <div className="mb-6">
                <p>
                    <strong>Location:</strong> {marathon.location}
                </p>
                <p>
                    <strong>Registration Dates:</strong>{" "}
                    {new Date(marathon.startRegDate).toLocaleDateString()} -{" "}
                    {new Date(marathon.endRegDate).toLocaleDateString()}
                </p>
                <p>
                    <strong>Total Registrations:</strong> {registrationCount}
                </p>
            </div>


            {/* Countdown Timer */}
            <div className="mb-6">
                <h3 className="text-xl font-bold mb-4">Time Left Until Marathon Starts</h3>
                <CountdownCircleTimer
                    isPlaying
                    duration={Math.floor((new Date(marathon.startDate) - new Date()) / 1000)}
                    colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
                    colorsTime={[7 * 24 * 60 * 60, 3 * 24 * 60 * 60, 1 * 24 * 60 * 60, 0]}
                    size={200}
                >
                    {({ remainingTime }) => {
                        const days = Math.floor(remainingTime / (24 * 60 * 60));
                        const hours = Math.floor((remainingTime % (24 * 60 * 60)) / (60 * 60));
                        const minutes = Math.floor((remainingTime % (60 * 60)) / 60);
                        return (
                            <div className="text-center">
                                <div className="text-2xl font-bold">{days}</div>
                                <div className="text-sm">Days</div>
                                <div className="text-2xl font-bold">{hours}</div>
                                <div className="text-sm">Hours</div>
                                <div className="text-2xl font-bold">{minutes}</div>
                                <div className="text-sm">Minutes</div>
                            </div>
                        );
                    }}
                </CountdownCircleTimer>

            </div>


            {isRegistrationOpen ? (
                <form
                    onSubmit={handleRegistrationSubmit}
                    className="bg-gray-100 p-6 rounded-lg shadow-md"
                >
                    <h3 className="text-xl font-bold mb-4">Register for {marathon.title}</h3>

                    {/* Email */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            defaultValue={user.email}
                            required
                            className="mt-2 block w-full border border-gray-300 rounded-lg px-4 py-2"
                        />
                    </div>

                    {/* First Name */}
                    <div className="mb-4">
                        <label htmlFor="firstName" className="block text-sm font-medium">
                            First Name
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            required
                            className="mt-2 block w-full border border-gray-300 rounded-lg px-4 py-2"
                        />
                    </div>

                    {/* Last Name */}
                    <div className="mb-4">
                        <label htmlFor="lastName" className="block text-sm font-medium">
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            required
                            className="mt-2 block w-full border border-gray-300 rounded-lg px-4 py-2"
                        />
                    </div>

                    {/* Contact Number */}
                    <div className="mb-4">
                        <label htmlFor="contactNumber" className="block text-sm font-medium">
                            Contact Number
                        </label>
                        <input
                            type="text"
                            id="contactNumber"
                            name="contactNumber"
                            required
                            className="mt-2 block w-full border border-gray-300 rounded-lg px-4 py-2"
                        />
                    </div>

                    {/* Additional Information */}
                    <div className="mb-4">
                        <label
                            htmlFor="additionalInfo"
                            className="block text-sm font-medium"
                        >
                            Additional Information
                        </label>
                        <textarea
                            id="additionalInfo"
                            name="additionalInfo"
                            className="mt-2 block w-full border border-gray-300 rounded-lg px-4 py-2"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                        >
                            Submit Registration
                        </button>
                    </div>
                </form>
            ) : (
                <p className="text-red-500 mt-4">Registration is currently closed.</p>
            )}
        </div>
    );
};

export default MarathonDetails;
