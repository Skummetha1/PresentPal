import React from 'react';
import './ExchangeProcess.css';
import inviteImage from './invite.jpeg'; 
import Scroll from './scroll.jpg';
import Gift from './gift.jpg';

const ExchangeProcess = () => {
    return (
        <div className="exchange-process">
            <h2 className="exchange-title">Exchange Process</h2>
            <div className="exchange-steps">
                <div className="step">
                    <div className="icon"><img src={inviteImage} alt="Send Invitations" /></div> {/* Using the imported image */}
                    <h3 className="step-title">1. Invite Friends</h3>
                    <p className="step-description">Create or join a Secret Santa group by inviting friends via email or sharing a unique event id. Each participant must sign up or log in to join the group.</p>
                </div>
                <div className="step">
                    <div className="icon"><img src={Scroll} alt="Draw Names" /></div>
                    <h3 className="step-title">2. Pairing Process</h3>
                    <p className="step-description">After finalizing the group, we will automatically pair each participant with another group member.</p>
                </div>
                <div className="step">
                    <div className="icon"><img src={Gift} alt="Exchange Gifts" /></div>
                    <h3 className="step-title">3. Gift Exchange</h3>
                    <p className="step-description">Participants can view their recipient's wishlist on the website and select a gift. Once they have chosen a gift, they can purchase it from an external site. On the exchange day, participants will reveal their identities and exchange gifts!</p>
                </div>
            </div>
        </div>
    );
};

export default ExchangeProcess;

