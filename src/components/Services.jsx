import React, { useEffect, useRef, useState } from 'react';
import '../App.css';
import '../styles/Services.css';

function Services() {
    const services = [
        {
            title: "Web Development",
            description: "Creating modern, responsive websites with cutting-edge technologies and best practices.",
            image: "../assets/services11.png"
        },
        {
            title: "UI/UX Design",
            description: "Crafting beautiful and intuitive user interfaces that deliver exceptional user experiences.",
            image: "../assets/services12.png"
        },
        {
            title: "Digital Marketing",
            description: "Driving growth through strategic digital marketing campaigns and analytics.",
            image: "../assets/services13.png"
        },
        {
            title: "Mobile Development",
            description: "Building native and cross-platform mobile applications for iOS and Android.",
            image: "../assets/services11.png"
        }
    ];

    const scrollRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);
    const [hoverIndex, setHoverIndex] = useState(null);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let animationFrameId;
        const speed = 2;

        const startScrolling = () => {
            const scroll = () => {
                if (!isPaused) {
                    scrollContainer.scrollLeft += speed;
                    if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
                        scrollContainer.scrollLeft = 0;
                    }
                }
                animationFrameId = requestAnimationFrame(scroll);
            };
            scroll();
        };

        startScrolling();

        return () => cancelAnimationFrame(animationFrameId);
    }, [isPaused]);

    return (
        <section className="bg-gray-50 py-16 services" id="services">
            <div className="container mx-auto px-4 services-container">
                <h2 className="text-4xl font-bold mb-2">What We Do</h2>
                <h3 className="text-xl text-gray-600 mb-12">Experience the power of innovation</h3>

                {/* Infinite Scroll Container */}
                <div
                    ref={scrollRef}
                    className="flex overflow-x-scroll gap-8 py-4 whitespace-nowrap scrollbar-hide"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {[...services, ...services].map((service, index) => (
                        <div
                            key={index}
                            className="flex-none w-[300px] cursor-pointer"
                            onMouseEnter={() => setHoverIndex(index)}
                            onMouseLeave={() => setHoverIndex(null)}
                        >
                            <div className="relative group bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
                                {/* Image Section */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>

                                {/* Title Section */}
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                                    
                                    {/* Description (Only visible on hover) */}
                                    <p className={`text-gray-600 transition-all duration-300 
                                        ${hoverIndex === index ? 'opacity-100 max-h-[1000px]' : 'opacity-0 max-h-0'}`}>
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;
