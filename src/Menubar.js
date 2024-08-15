import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './MenuBar.css';
import ContactFriend from './ContactFriend';

function Menubar({ loggedInUser, handleSignOut, setLoggedInUser }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const navigate = useNavigate();

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleSignOutAndNavigate = () => {
    handleSignOut();
    navigate('/'); 
  };

  return (
    <nav className="nav-bar">
      <div className="nav-links left-links">
        <button onClick={openPopup} className="bold-button tell-a-friend">Tell a friend</button>
        <Link to="/pairgenerator">Generate Pairs</Link>
      </div>
      <div className="nav-logo">
        {loggedInUser ? (
          <Link to="/dashboard">PresentPal</Link>
        ) : (
          <Link to="/">PresentPal</Link>
        )}
      </div>
      <div className="nav-links right-links">
        {loggedInUser ? (
          <>
            <button onClick={handleSignOutAndNavigate}>Sign Out</button>
            <div className="dropdown">
              <button className="dropbtn">More</button>
              <div className="dropdown-content">
                <Link to="/profile">Profile</Link>
                <Link to="/joinevent">Join Event</Link>
                <Link to="/viewevent">View Event</Link>
                <Link to="/viewHolidays">View Holidays</Link>
                <Link to="/wishlist">Wishlist♥</Link>
                <Link to="/createevent">Create Event</Link>
              </div>
            </div>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Get started</Link>
          </>
        )}
      </div>
      <ContactFriend isOpen={isPopupOpen} onClose={closePopup} />
    </nav>
  );
}

export default Menubar;
