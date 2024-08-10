import React, { useState } from 'react';
import * as Components from './Component';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignIn({ toggleSignUp }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:8080/api/users/login', {
                email,
                password
            });

            setSuccessMessage(response.data);
            setErrorMessage('');
            navigate("/"); // Redirect to home page
        } catch (error) {
            setErrorMessage(error.response ? error.response.data : 'Login failed.');
        }
    };

    return (
        <Components.Container>
            <Components.SignInContainer>
                <Components.Form>
                    <Components.Title>Sign In</Components.Title>
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
                    <Components.Anchor href='https://support.google.com/accounts/answer/41078?hl=en&co=GENIE.Platform%3DAndroid'>
                        Forgot your password?
                    </Components.Anchor>
                    <Components.Button onClick={handleLogin}>LOGIN</Components.Button>
                    {successMessage && <p className="text-success">{successMessage}</p>}
                    {errorMessage && <p className="text-danger">{errorMessage}</p>}
                </Components.Form>
            </Components.SignInContainer>
        </Components.Container>
    );
}

export default SignIn;
