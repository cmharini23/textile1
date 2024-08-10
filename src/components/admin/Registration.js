import React, { useState } from 'react';
import axios from 'axios';
import CustomerDetailsForm from './CustomerDetailsForm';

const Registration = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        const newUser = { username, password };
        try {
            const response = await axios.post('http://localhost:8080/login', newUser);
            console.log(response.data.message);
        } catch (error) {
            console.error(error.response.data.message);
        }
    };

    return (
        <div>
            <form onSubmit={handleRegister}>
                <div>
                    <label>Username</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit">Register</button>
            </form>
            <CustomerDetailsForm username={username} />
        </div>
    );
};

export default Registration;
