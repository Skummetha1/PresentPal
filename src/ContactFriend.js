import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ContactFriend.css';
import Menubar from './Menubar';

function ContactFriend({ isOpen, onClose }) {
    if (!isOpen) return null;

    const handleCopy = () => {
        const text = "Come join me in all the gift-giving fun at Elfster!";
        navigator.clipboard.writeText(text).then(() => {
            toast.success('Text copied to clipboard', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        });
    };

    return (
        <>
         <Menubar />
            <div className="popup-overlay">
                <div className="popup-content">
                    <span className="close-btn" onClick={onClose}>&times;</span>
                    <h2>Tell your friend about PresentPal</h2>
                    <textarea readOnly value="Come join me in all the gift-giving fun at PresentPal!"></textarea>
                    <button onClick={handleCopy}>Copy</button>
                    
                </div>
            </div>
            <ToastContainer />
        </>
    );
}

export default ContactFriend;
