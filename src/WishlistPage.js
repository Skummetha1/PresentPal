import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Menubar from './Menubar';
import RemoveItem from './RemoveWishItem';
import './Wishlist.css';
import CreateWishItem from './CreateWishItem';

const WishlistPage = () => {
    const [items, setItems] = useState([]);
    const [loggedInUser, setLoggedInUser] = useState(null);
    const [showAddItemModal, setShowAddItemModal] = useState(false);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userId = JSON.parse(localStorage.getItem('loggedInUser'))._id;
                const response = await axios.get(`http://localhost:9000/getUser`, {
                    params: { userId }
                });
                setLoggedInUser(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);

    useEffect(() => {
        axios.get('http://localhost:9000/getWishlist')
            .then(function (response) {
                setItems(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    const handleRemoveItem = (itemId) => {
        setItems(prevItems => prevItems.filter(item => item._id !== itemId));
    };

    return (
        <div className="wishlist-page">
            <Menubar loggedInUser={loggedInUser} />
            <div className="wishlist-header">
                <h2>{loggedInUser ? `${loggedInUser.firstname}'s Wishlist` : 'Wishlist'}</h2>
                <div className="button-container">
                    <button className="btn-primary" onClick={() => setShowAddItemModal(true)}>Create Wishlist Item</button>
                    <Link to="/shop"><button className="btn-secondary">Shop for Wishlist</button></Link>
                </div>
            </div>


            <div className="wishlist-items">
                <table className="wishlist-table">
                    <thead>
                        <tr>
                            <th>Item Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Link</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                     
                    <tbody>
                        {items.map((item, index) => (
                            <tr key={index}>
                                <td>{item.item_name}</td>
                                <td>{item.item_desc}</td>
                                <td>${item.item_price}</td>
                                <td><a href={item.item_link} target="_blank" rel="noopener noreferrer" className="btn-link">View</a></td>
                                <td>
                                    <RemoveItem itemId={item._id} onRemove={handleRemoveItem} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {showAddItemModal && (
                <CreateWishItem
                    showAddItemModal={showAddItemModal}
                    setShowAddItemModal={setShowAddItemModal}
                    setItems={setItems}
                />
            )}
        </div>
    );
};

export default WishlistPage;






