import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Carousel as ReactResponsiveCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carousel.css';
import './Virtual Secret Santa.png';

const events = [
    {
        buttonText: 'Join the Fun',
        className: 'event-virtual-secret-santa'
    },
    {
        buttonText: 'Celebrate Now',
        className: 'event-birthday-gift-exchange'
    },
    {
        buttonText: 'Join the Celebration',
        className: 'event-anniversary-gift-swap'
    },
    {
        buttonText: 'Start Swapping',
        className: 'event-holiday-gift-circle'
    },
];

const Carousel = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleButtonClick = () => {
        navigate('/signup'); // Navigate to the signup page
    };

    return (
        <div className="carousel-wrapper">
            <ReactResponsiveCarousel
                autoPlay
                interval={1500}
                infiniteLoop
                showThumbs={false}
                showStatus={false}
                showIndicators={true}
                useKeyboardArrows
                stopOnHover
                swipeable
                dynamicHeight
                showArrows
            >
                {events.map((event, index) => (
                    <div key={index} className={`carousel-slide ${event.className}`}>
                        <div className="carousel-content">
                            <button
                                className="carousel-button"
                                onClick={handleButtonClick} // Add onClick handler
                            >
                                {event.buttonText}
                            </button>
                        </div>
                    </div>
                ))}
            </ReactResponsiveCarousel>
        </div>
    );
};

export default Carousel;

