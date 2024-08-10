import React, { useState } from 'react';
import * as Components from './Component';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';

function SignUp({ toggleSignIn }) {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);

    const sendConfirmationEmail = (email, username) => {
        const templateParams = {
            to_email: email,
            to_name: username,
            message: 'Thank you for registering with ChronoCraft! Your account has been created successfully.',
        };

        emailjs.send('service_grr33c09p', 'template_2j8l3323n', templateParams, '9qPVcliB033l4Hvmnc3')
            .then((response) => {
                console.log('Confirmation email sent successfully!', response.status, response.text);
            })
            .catch((error) => {
                console.error('Failed to send confirmation email:', error);
            });
    };

    const handleSignUp = async () => {
        if (!name || !email || !password || !confirmPassword) {
            setErrorMessage("Please enter all fields");
            return;
        }
        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match!');
            return;
        }

        try {
            const response = await fetch('http://localhost:8080/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password, role: 'user' }),
            });

            const data = await response.json();

            if (response.ok) {
                sendConfirmationEmail(email, name);
                setShowSuccessPopup(true);
                setTimeout(() => setShowSuccessPopup(false), 3000);
                toggleSignIn();
            } else {
                setErrorMessage(data.message);
            }
        } catch (error) {
            console.error('Error during registration:', error);
            setErrorMessage('Registration failed: Network error or server not responding.');
        }
    };

    return (
        <Components.Container>
            <Components.SignUpContainer>
                <Components.Form>
                    <Components.Title>Create Account</Components.Title>
                    <Components.Input
                        type='text'
                        placeholder='Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Components.Input
                        type='email'
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Components.Input
                        type='password'
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Components.Input
                        type='password'
                        placeholder='Confirm Password'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <Components.Button onClick={handleSignUp}>Sign Up</Components.Button>
                    {showSuccessPopup && <div className="success-popup">Signup Successful!</div>}
                    {errorMessage && <p className="text-danger">{errorMessage}</p>}
                </Components.Form>
            </Components.SignUpContainer>
        </Components.Container>
    );
}

export default SignUp;
