import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    const slides = [
        {
            image: "https://i.ibb.co.com/98nbg6j/running-6759123-1280.jpg",
            title: "Empowering Your Fitness Journey",
            description: "The platform that turns aspirations into accomplishments.",
        },
        {
            image: "https://i.ibb.co.com/ymCCskr/marathon-6660180-1280.jpg",
            title: "Marathon Event 2023",
            description: "Join us on October 20, 2023, for a life-changing race.",
        },
        {
            image: "https://i.ibb.co.com/gdvRckJ/race-932254-1280.jpg",
            title: "Achieve Your Personal Best",
            description: "Run with us and take a step towards greatness.",
        },
    ];

    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper "
                style={{ width: '100%', height: '400px' }}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index} className="relative">
                        {/* Background Image */}
                        <img
                            src={slide.image}
                            alt={`Slide ${index + 1}`}
                            className="object-cover h-full w-full"
                        />
                        {/* Overlay Text */}
                        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-center text-white px-4">
                            <h2 className="text-3xl md:text-5xl font-bold mb-4">{slide.title}</h2>
                            <p className="text-lg md:text-xl">{slide.description}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Banner;
