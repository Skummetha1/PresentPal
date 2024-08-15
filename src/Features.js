import React from 'react';
import './Features.css';

function Features() {
    return (
        <section className="features">
            <h2>Features</h2>
            <div className="feature-list">
                <div className="feature">
                    <img src="group-setup-icon.png" alt="Easy Group Setup" />
                    <h3>Easy Group Setup</h3>
                    <p>Quickly set up groups and invite friends.</p>
                </div>
                <div className="feature">
                    <img src="wishlist-icon.png" alt="Wishlist Creation" />
                    <h3>Wishlist Creation</h3>
                    <p>Add items from our extensive product catalog.</p>
                </div>
                <div className="feature">
                    <img src="matching-icon.png" alt="Anonymous Matching" />
                    <h3>Anonymous Matching</h3>
                    <p>Ensure the secrecy of the gift exchange.</p>
                </div>
                <div className="feature">
                    <img src="reminders-icon.png" alt="Reminders & Notifications" />
                    <h3>Reminders & Notifications</h3>
                    <p>Stay updated with reminders and notifications.</p>
                </div>
            </div>
        </section>
    );
}

export default Features;
