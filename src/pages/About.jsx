import { motion } from "framer-motion";

const About = () => {
    return (
        <div className="container mx-auto p-6 text-center">
            <h1 className="text-4xl font-bold text-red-600 mb-4">About Us</h1>
            <div className="md:flex justify-between gap-8">
                <motion.img 
                 animate={{ x: 10 }}
                 transition={{ type: "spring", stiffness: 100 }}
                src="https://i.ibb.co/mrzbg8rF/download-2.jpg"
                    className="w-full rounded-md"
                    alt="Ouer Team" />
                <motion.p animate={{ y: 20 }}
                 transition={{ type: "spring", stiffness: 100 }} className="text-lg mb-6 ">
                    Welcome to the ultimate test of endurance and spirit! Our marathon is dedicated to bringing together runners
                    from all walks of life to challenge themselves and achieve greatness. Whether you're a seasoned athlete
                    or a first-time participant, our event is designed to inspire and motivate you.
                </motion.p>
            </div>
            <h2 className="text-2xl font-semibold  mb-3">Our Mission</h2>
            <p className="mb-6">
                We believe in promoting fitness, community, and perseverance through marathon running. Our goal is to
                create an inclusive event that fosters sportsmanship and personal growth.
            </p>
            <h2 className="text-2xl font-semibold  mb-3">Why Join Us?</h2>
            <ul className="list-disc list-inside  text-left mx-auto max-w-2xl">
                <li>Professional race organization and safety measures</li>
                <li>Scenic route with cheering crowds</li>
                <li>Finisher medals and exclusive event merchandise</li>
                <li>Opportunities to support charitable causes</li>
            </ul>
        </div>
    );
};

export default About;
