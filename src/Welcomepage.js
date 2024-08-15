import React from 'react';
import { useNavigate } from 'react-router-dom';
import CarouselComponent from './Carousel';
import ExchangeProcess from './ExchangeProcess';
import './Welcomepage.css';

function Welcomepage() {
    const navigate = useNavigate();

    return (
        <div className="welcome-container">
            <CarouselComponent />
            <ExchangeProcess />
        </div>
    );
}

export default Welcomepage;
