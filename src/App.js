import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Profile from './Profile';
import Welcomepage from './Welcomepage';
import ViewEvent from './ViewEvent';
import PairGenerator from './PairGenerator';
import WishlistPage from './WishlistPage';
import SendFriendRequest from './SendFriendRequest';
import FriendRequest from './FriendRequests';
import PairView from './ViewYourPair';
import CreateEvent from './CreateEvent';
import Shop from './Shop';
import ViewHolidays from './ViewHolidays';
import Dashboard from './Dashboard';
import Menubar from './Menubar';


function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    try {
      const user = JSON.parse(localStorage.getItem('loggedInUser'));
      setLoggedInUser(user);
    } catch (error) {
      console.error('Error parsing logged in user from localStorage', error);
      setLoggedInUser(null);
    }
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem('loggedInUser');
    setLoggedInUser(null);
  };

  return (
    <Router>
      <div className="App">
        <Menubar 
          loggedInUser={loggedInUser} 
          handleSignOut={handleSignOut} 
          setLoggedInUser={setLoggedInUser} 
        />
        
        <Routes>
          <Route path="/" element={<Welcomepage />} />
          <Route path="/home" element={<Welcomepage />} />
          <Route path="/login" element={<Login setLoggedInUser={setLoggedInUser} />} />
          <Route path="/signup" element={<Signup setLoggedInUser={setLoggedInUser} />} />
          <Route path="/profile" element={<Profile loggedInUser={loggedInUser} />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/viewevent" element={<ViewEvent />} />
          <Route path="/pairgenerator" element={<PairGenerator />} />
          <Route path="/pairview" element={<PairView />} />
          <Route path="/createevent" element={<CreateEvent />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/viewHolidays" element={<ViewHolidays />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/friends" element={<FriendRequest />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
