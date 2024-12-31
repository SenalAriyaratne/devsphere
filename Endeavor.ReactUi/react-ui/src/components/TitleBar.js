import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import profilePicture from '../assets/images/profile.jpg'; // Adjust the path to your image
import logo from '../assets/images/logoDS.PNG';
const TitleBar = ({ isSignedIn, onSignIn, onCreateAccount }) => {
    // const [isSignedIn, setIsSignedIn] = useState(false); // State to track if the user is signed in

    return (
        <div className={`title-bar ${isSignedIn ? 'connected' : ''}`}>
            <div className="logo-container">
                <img src={logo} alt="Logo" className="logo" />
                <span className="app-name">
                    <span className="dev">DEV</span>
                    <span className="sphere">SPHERE</span>
                </span>
            </div>
            {isSignedIn ? (
                <img src={profilePicture} alt="Profile" className="profile-picture" />
            ) : (
                <div className="auth-buttons">
                    <button className="create-account-button" onClick={onCreateAccount}>Create Account</button>
                    
                    <button className="sign-in-button" onClick={onSignIn}>Sign in</button>
                </div>
            )}
        </div>
    );
};

export default TitleBar;