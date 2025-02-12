import { Helmet } from "react-helmet-async";
import MarathonsCard from "../components/MarathonsCard";
import Banner from "../components/Banner";
import { FaRegCalendarCheck } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";


const HomePage = () => {
    return (
        <>
            <div>
                <Helmet> Home || Marathon-X</Helmet>
            </div>
            <Banner></Banner>
            {/* dynamic fatch to server 6 marathon */}
            <div className="bg-base-100">
               
                {/* Previous  section */}
                <div>
                <MarathonsCard></MarathonsCard>
                    <div className="py-10">
                        <div className="container mx-auto px-4">
                            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
                                <span className="text-orange-700">Previous</span> Marathon Events
                            </h2>
                            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                                {/* Card Component */}
                                {[
                                    {
                                        img: "https://i.ibb.co/K0XKPLb/nnnnnnnn3.jpg",
                                        title: "New York Marathon",
                                        date: "March 15, 2024",
                                        location: "New York City, USA",
                                        desc: "Join one of the world's biggest marathon events!",
                                    },
                                    {
                                        img: "https://i.ibb.co/PxvQF4t/competition-3913558-1280.jpg",
                                        title: "Boston Marathon",
                                        date: "April 20, 2024",
                                        location: "Boston, USA",
                                        desc: "Experience the excitement of the historic Boston Marathon.",
                                    },
                                    {
                                        img: "https://i.ibb.co/8mkGV4V/lllllllllll.jpg",
                                        title: "London Marathon",
                                        date: "April 28, 2024",
                                        location: "London, UK",
                                        desc: "Run through the iconic streets of London.",
                                    },
                                    {
                                        img: "https://i.ibb.co/Cmkm2dR/ttttttttttttjpeg.jpg",
                                        title: "Tokyo Marathon",
                                        date: "March 10, 2024",
                                        location: "Tokyo, Japan",
                                        desc: "Be part of Japan's biggest marathon event.",
                                    },
                                    {
                                        img: "https://i.ibb.co/ymCCskr/marathon-6660180-1280.jpg",
                                        title: "Berlin Marathon",
                                        date: "September 22, 2024",
                                        location: "Berlin, Germany",
                                        desc: "Race through the historic streets of Berlin.",
                                    },
                                    {
                                        img: "https://i.ibb.co/GdWTpMK/cccccc.jpg",
                                        title: "Chicago Marathon",
                                        date: "October 13, 2024",
                                        location: "Chicago, USA",
                                        desc: "Join runners from around the globe in Chicago.",
                                    },
                                ].map((event, index) => (
                                    <div
                                        key={index}
                                        className="bg-base-100 relative shadow-md rounded-lg p-4 hover:shadow-lg transition duration-300 transform hover:-translate-y-2"
                                    >
                                        <img
                                            src={event.img}
                                            alt={event.title}
                                            className="w-full h-48 object-cover rounded-t-lg"
                                        />
                                        <h3 className="text-xl font-semibold  mt-4">{event.title}</h3>
                                        <div className="flex gap-2 items-center mt-2">
                                            <FaRegCalendarCheck />
                                            <p className="text-gray-600 ">{event.date}</p>
                                        </div>
                                        <div className="flex gap-2 items-center mt-2">
                                            <MdLocationPin />
                                            <p className="text-gray-600 "> {event.location}</p>
                                        </div>

                                        <p className="text-sm text-gray-500 mt-4">{event.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                {/*Extra two section*/}
                <div>
                    <section className=" py-10 ">
                        <div className="container mx-auto px-4">
                            {/* Section Title */}
                            <div className="text-center mb-8">
                                <h5 className="text-orange-700 uppercase tracking-wide font-semibold">
                                    Running's Benefits
                                </h5>
                                <h2 className="text-2xl md:text-3xl font-bold">
                                    Benefits of Running Reference
                                </h2>
                            </div>

                            {/* Layout */}
                            <div className="flex flex-col lg:flex-row items-center">
                                {/* Left Cards */}
                                <div className="flex flex-col gap-6 lg:gap-12 w-full lg:w-1/3">
                                    <div className="text-right">
                                        <h3 className="text-orange-700 text-3xl font-bold">01</h3>
                                        <h4 className="text-xl font-semibold mt-2">Be Healthy</h4>
                                        <p className=" mt-2">
                                            Improve your physical fitness and well-being through regular
                                            running.
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <h3 className="text-orange-700 text-3xl font-bold">02</h3>
                                        <h4 className="text-xl font-semibold mt-2">Feel Free</h4>
                                        <p className=" mt-2">
                                            Experience the freedom of running outdoors, and challenging
                                            yourself.
                                        </p>
                                    </div>
                                </div>

                                {/* Central Circular Image */}
                                <div className="relative flex-shrink-0 my-8 lg:my-0 lg:mx-12">
                                    <div className="rounded-full border-[8px] border-brown-500 w-64 h-64 md:w-80 md:h-80 flex items-center justify-center overflow-hidden">
                                        <img
                                            src="https://i.ibb.co/nDLR6Qv/man-1001591-1280.png"
                                            alt="Running"
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                </div>


                                {/* Right Cards */}
                                <div className="flex flex-col gap-6 lg:gap-12 w-full lg:w-1/3">
                                    <div className="text-left">
                                        <h3 className="text-orange-700 text-3xl font-bold">03</h3>
                                        <h4 className="text-xl font-semibold mt-2">Be One Of Us</h4>
                                        <p className=" mt-2">
                                            Join a supportive community of like-minded runners and achieving
                                            goals together.
                                        </p>
                                    </div>
                                    <div className="text-left">
                                        <h3 className="text-orange-700 text-3xl font-bold">04</h3>
                                        <h4 className="text-xl font-semibold mt-2">Be Strong</h4>
                                        <p className=" mt-2">
                                            Build resilience and mental toughness as you push your limits.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className=" py-10">
                        <div className="container mx-auto px-4">
                            {/* Section Header */}
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold  mb-8">Our Blogs</h2>
                            </div>

                            {/* Blog Layout */}
                            <div className="flex flex-col lg:flex-row gap-8">
                                {/* Left Featured Blog */}
                                <div className="w-full lg:w-2/3">
                                    <div className="relative">
                                        <img
                                            src="https://i.ibb.co.com/fCWc9MR/marathon-7009273-1280.jpg"
                                            alt="Blog Cover"
                                            className="rounded-lg w-full object-cover"
                                        />

                                    </div>
                                </div>

                                {/* Right Smaller Blogs */}
                                <div className="w-full lg:w-1/3 flex flex-col gap-6">
                                    {/* Static Blog Items */}
                                    <div className="flex gap-4">
                                        {/* Blog Image */}
                                        <img
                                            src="https://i.ibb.co.com/98nbg6j/running-6759123-1280.jpg"
                                            alt="The Science Behind Running"
                                            className="w-24 h-24 object-cover rounded-lg"
                                        />
                                        {/* Blog Content */}
                                        <div>
                                            <span className="bg-green-600 text-xs uppercase px-2 py-1 rounded-sm text-white">
                                                Race
                                            </span>
                                            <h4 className="text-lg font-bold mt-2">
                                                The Science Behind Running: How It Benefits Your Body And Mind
                                            </h4>
                                            <p className="text-sm text-gray-500 mt-1">
                                                by Rae Lil &mdash; Oct 12, 2023
                                            </p>

                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        {/* Blog Image */}
                                        <img
                                            src="https://i.ibb.co.com/hyG4QdR/race-5324594-1280.jpg"
                                            alt="From Couch to 5K"
                                            className="w-24 h-24 object-cover rounded-lg"
                                        />
                                        {/* Blog Content */}
                                        <div>
                                            <span className="bg-green-600 text-xs uppercase px-2 py-1 rounded-sm text-white">
                                                Running
                                            </span>
                                            <h4 className="text-lg font-bold mt-2">
                                                From Couch To 5K: A Step-By-Step Guide To Becoming A Runner
                                            </h4>
                                            <p className="text-sm text-gray-500 mt-1">
                                                by Michale Chen &mdash; Oct 12, 2023
                                            </p>

                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        {/* Blog Image */}
                                        <img
                                            src="https://i.ibb.co.com/cYN3vBh/marathon-3436374-1280.jpg"
                                            alt="The Best Running Gear"
                                            className="w-24 h-24 object-cover rounded-lg"
                                        />
                                        {/* Blog Content */}
                                        <div>
                                            <span className="bg-green-600 text-xs uppercase px-2 py-1 rounded-sm text-white">
                                                Running
                                            </span>
                                            <h4 className="text-lg font-bold mt-2">
                                                The Best Running Gear For Beginners: Find Your Comfort
                                            </h4>
                                            <p className="text-sm text-gray-500 mt-1">
                                                by Alex Taylor &mdash; Oct 13, 2023
                                            </p>
                                        </div>
                                    </div>


                                    <div className="flex gap-4">
                                        {/* Blog Image */}
                                        <img
                                            src="https://i.ibb.co.com/NCx12KK/race-932254-1280-1.jpg"
                                            alt="The Best Running Shoes"
                                            className="w-24 h-24 object-cover rounded-lg"
                                        />
                                        {/* Blog Content */}
                                        <div>
                                            <span className="bg-green-600 text-xs uppercase px-2 py-1 rounded-sm text-white">
                                                Running
                                            </span>
                                            <h4 className="text-lg font-bold mt-2">
                                                The Best Running Shoes For Every Terrain: Find Your Perfect Fit
                                            </h4>
                                            <p className="text-sm text-gray-500 mt-1">
                                                by Maverick Nguyen &mdash; Oct 12, 2023
                                            </p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default HomePage;