import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Menubar from './Menubar';
import axios from 'axios';
import './Signup.css';

function Signup({ setLoggedInUser }) {
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSignUp = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setErrorMessage('');

        const form = event.target;
        const firstname = form.firstname.value;
        const lastname = form.lastname.value;
        const username = form.username.value;
        const password = form.password.value;
        const day = form.day.value;
        const month = form.month.value;
        const year = form.year.value;
        const signupValues = {
            firstname,
            lastname,
            username,
            password,
            dateOfBirth: `${year}-${month}-${day}`,
        };

        try {
            const response = await axios.post('http://localhost:9000/createUser', signupValues);
            const userData = response.data;
            localStorage.setItem('loggedInUser', (userData));
            setLoggedInUser(userData);

            // Define initial profile values, possibly based on some defaults or empty
            const profileValues = {
                userID: userData._id,
                bio: '',
                wishlistID: null,
                interestID: [],
                eventID: null,
                budgetID: null,
                deadlineID: null
            };

            await axios.post('http://localhost:9000/createUserProfile', profileValues);
            navigate('/dashboard');

        } catch (err) {
            console.error('Error in Signing Up or creating profile:', err);
            setErrorMessage(err.response?.data?.message || 'Error occurred. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
        <Menubar />
        <div className="signup-container">
            <form onSubmit={handleSignUp} className="signup-form">
                <h1>Sign Up</h1>
                {errorMessage && <div className="error-message">{errorMessage}</div>}
                <input type="text" id="firstname" name="firstname" placeholder="First Name" required />
                <input type="text" id="lastname" name="lastname" placeholder="Last Name" required />
                <input type="text" id="username" name="username" placeholder="Username" required />
                <input type="password" id="password" name="password" placeholder="Password" required />
                <div className="dob">
                    <label>Date of Birth</label>
                    <div className="date-inputs">
                        <input type="number" id="month" name="month" placeholder="MM" min="1" max="12" required />
                        <input type="number" id="day" name="day" placeholder="DD" min="1" max="31" required />
                        <input type="number" id="year" name="year" placeholder="YYYY" required />
                    </div>
                </div>
                <button type="submit" disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Submit'}</button>
                <p className="login-link">
                    Already have an account? <a href="#" onClick={(e) => {
                        e.preventDefault();
                        navigate('/login');
                    }}>Log in</a>
                </p>
            </form>
        </div>
        </>
    );
}

export default Signup;
