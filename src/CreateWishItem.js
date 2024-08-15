import React, { useState } from "react";
import axios from 'axios';
import './CreateWishItem.css'

const CreateWishItem = () => {
    const [item_name, setWishItemName] = useState('');
    const [item_desc, setWishItemDescription] = useState('');
    const [item_price, setWishItemPrice] = useState('');
    const [item_link, setWishItemLink] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCreateWishItem = (event) => {
        event.preventDefault();
        axios.post('http://localhost:9000/createWishItem', { item_name, item_desc, item_price, item_link })
            .then(() => {
                window.location.reload();
            })
            .catch((err) => alert('Error in Creating WishItem'));
    }

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }


    
    return (
        <div>
            <button onClick={toggleModal}>Create Wishlist Item</button>

            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={toggleModal}>&times;</span>
                        <h2 className="card-title text-center">Create Wishlist Item</h2>
                        <form>
                            <label>
                                Item Name:
                                <input
                                    type="text"
                                    value={item_name}
                                    onChange={(e) => setWishItemName(e.target.value)}
                                />
                            </label>
                            <br />
                            <label>
                                Item Description:
                                <textarea
                                    type="text"
                                    value={item_desc}
                                    onChange={(e) => setWishItemDescription(e.target.value)}
                                />
                            </label>
                            <br />
                            <label>
                                Item Price:
                                <input
                                    type="text"
                                    value={item_price}
                                    onChange={(e) => setWishItemPrice(e.target.value)}
                                />
                            </label>
                            <br />
                            <label>
                                Item Link:
                                <input
                                    type="text"
                                    value={item_link}
                                    onChange={(e) => setWishItemLink(e.target.value)}
                                />
                            </label>
                            <br />
                            <button type="button" onClick={handleCreateWishItem}>
                                Create Wishlist Item
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CreateWishItem;
