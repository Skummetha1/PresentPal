import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Dashboard.css';
import ViewEvent from './ViewEvent'; 
import ViewHolidays from './ViewHolidays'; 

function Dashboard() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    useEffect(() => {
        if (loggedInUser) {
            axios.get(`http://localhost:9000/getUser`, {
                params: { userId: loggedInUser._id }
            })
            .then(response => {
                setUser(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the user data!', error);
            });
        } else {
            navigate('/login');
        }
    }, [loggedInUser, navigate]);

    const handleProfile = () => {
        navigate('/profile');
    };

    const handleAddEvent = () => {
        navigate('/createEvent');
    };

    const handleJoinEvent = () => {
        navigate('/joinEvent');
    };

    const handleAddToWishlist = () => {
        navigate('/wishlist');
    };

    if (!loggedInUser) {
        navigate('/login');
        return null;
    }

    return (
        <div className="dashboard-container">
            
            <div className="dashboard-nav">
                <button onClick={handleProfile}>Edit Profile</button>
                <button onClick={handleAddEvent}>Create Event</button>
                <button onClick={handleJoinEvent}>Join Event</button>
                <button onClick={handleAddToWishlist}>Add to Wishlist</button>
            </div>
            <h1 className="welcome-message">
                {user ? `Welcome, ${user.firstname}!` : 'Loading...'}
            </h1>
            <ViewEvent /> 
            <ViewHolidays /> 
        </div>
    );
}

export default Dashboard;
