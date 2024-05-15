import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

function RegistrationForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [fullname, setFullname] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [gender, setGender] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };
    
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleFullnameChange = (event) => {
        setFullname(event.target.value);
    };

    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    };

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:3001';
        try {
            const response = await fetch(`${apiUrl}/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    password,
                    fullname,
                    phoneNumber,
                    gender,
                }),
            });
            const data = await response.json();
            console.log(data); // Log the response from the backend
    
            if (response.ok) { // Check if registration was successful
                // Clear the form fields
                setUsername('');
                setPassword('');
                setFullname('');
                setPhoneNumber('');
                setGender('');
                navigate('/login'); // Navigate to login page
            } else {
                // Handle errors or unsuccessful registration
                console.error('Registration failed:', data.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    

    const handleLoginClick = () => {
        navigate('/login');
    };

    return (
        <div className="container">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Nobles Medical</h1>
                <div className="main-user-info">
                    <div className="user-input-box">
                        <label htmlFor="fullName">Full Name</label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            placeholder="Enter Full Name"
                            value={fullname}
                            onChange={handleFullnameChange}
                        />
                    </div>
                    <div className="user-input-box">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Enter Username"
                            value={username}
                            onChange={handleUsernameChange}
                        />
                    </div>
                    <div className="user-input-box">
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input
                            type="text"
                            id="phoneNumber"
                            name="phoneNumber"
                            placeholder="Enter Phone Number"
                            value={phoneNumber}
                            onChange={handlePhoneNumberChange}
                        />
                    </div>
                    <div className="user-input-box">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter Password"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                    </div>
                    <div className="user-input-box">
                        <label htmlFor="gender">Gender</label>
                        <select
                            id="gender"
                            name="gender"
                            value={gender}
                            onChange={handleGenderChange}
                        >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                </div>
                <div className="form-submit-btn">
                    <button type="button" onClick={handleLoginClick}>Login</button>
                </div>
                <div className="Register-submit-btn">
                    <button type="submit" >Register</button>
                </div>
            </form>
        </div>
    );
}

export default RegistrationForm;
