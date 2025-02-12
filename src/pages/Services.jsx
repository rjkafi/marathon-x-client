const Services = () => {
    return (
        <>
            <section className="py-12">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold mb-12">Our Services</h2>
                    <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                        <div className="service-item  rounded-lg shadow-lg overflow-hidden">
                            <img src="https://i.ibb.co.com/SzySxjn/Sign-up.gif" alt="Service 1" className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-4">Race Registration</h3>
                                <p>Register easily for your next marathon. Our platform makes race registration simple and quick.</p>
                            </div>
                        </div>
                        <div className="service-item  rounded-lg shadow-lg overflow-hidden">
                            <img src="https://i.ibb.co.com/qFMNjVC7/Active-Support.gif" alt="Service 2" className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-4">Race Day Support</h3>
                                <p >Get the best support on race day, with water stations, medical teams, and event guides available all day.</p>
                            </div>
                        </div>
                        <div className="service-item  rounded-lg shadow-lg overflow-hidden">
                            <img src="https://i.ibb.co.com/v4rjLp9t/Running.gif" alt="Service 3" className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-4">Training Programs</h3>
                                <p>Join our expert-led training programs designed for every level, from beginners to seasoned marathoners.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Services;
