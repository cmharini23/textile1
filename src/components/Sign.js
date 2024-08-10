import React, { useState } from "react";
import * as Components from './Component';
import { useNavigate } from "react-router-dom";

function App() {
    const [signIn, toggle] = React.useState(false);
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);
    const navigate = useNavigate();

    const handleSignUp = async (event) => {
        event.preventDefault();
        if (!name || !email || !password || !confirmPassword) {
            alert("Please enter all fields");
            return;
        }
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        try {
            const response = await fetch('http://localhost:8080/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username: name, email, password, role: 'user' }),
            });

            const data = await response.json();

            if (response.ok) {
                setShowSuccessPopup(true);
                setTimeout(() => setShowSuccessPopup(false), 3000);
                toggle(true);
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error('Error during registration:', error);
            alert('Registration failed: Network error or server not responding.');
        }
    };

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:8080/login/check', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username: name, password }),
            });

            if (!response.ok) {
                if (response.status === 401) {
                    alert('Login failed: Invalid username or password.');
                } else {
                    alert(`Login failed: Server responded with status ${response.status}.`);
                }
                return;
            }

            const result = await response.json();
            if (result.success) {
                localStorage.setItem('username', name);
                localStorage.setItem('role', result.role);

                if (result.role === 'admin') {
                    navigate('/admin/dashboard');
                } else {
                    navigate('/');
                }
            } else {
                alert('Login failed: ' + result.message);
            }
        } catch (error) {
            console.error('Error during fetch:', error);
            alert('Login failed: Network error or server not responding.');
        }
    };

    return (
        <body>
            <video
                autoPlay
                loop
                muted
                playsInline
                style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    objectFit: 'cover',
                }}
                src="https://www.shutterstock.com/shutterstock/videos/3553678033/preview/stock-footage-fashion-blogger-concept-young-asian-women-selling-clothes-on-video-streaming-startup-small.webm"
            />

            <div className="signupcon">
                <Components.Container>
                    {signIn ? (
                        <Components.SignInContainer signinIn={signIn} name={name}>
                            <Components.Form onSubmit={handleLogin}>
                                <Components.Title>Welcome {name}!!</Components.Title>
                                <Components.Input type='text' placeholder='Username' value={name} onChange={e => setName(e.target.value)} required />
                                <Components.Input type='password' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} required />
                                <Components.Anchor href='https://support.google.com/accounts/answer/41078?hl=en&co=GENIE.Platform%3DAndroid'>Forgot your password?</Components.Anchor>
                                <Components.Button type="submit">LOGIN</Components.Button>
                            </Components.Form>
                        </Components.SignInContainer>
                    ) : (
                        <Components.SignUpContainer signinIn={signIn}>
                            <Components.Form onSubmit={handleSignUp}>
                                <Components.Title>Create Account</Components.Title>
                                <Components.Input type='text' placeholder='Name' value={name} onChange={e => setName(e.target.value)} required />
                                <Components.Input type='email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} required />
                                <Components.Input type='password' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} required />
                                <Components.Input type='password' placeholder='Confirm Password' value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required />
                                <Components.Button type="submit">Sign Up</Components.Button>
                            </Components.Form>
                        </Components.SignUpContainer>
                    )}

                    <Components.OverlayContainer signinIn={signIn}>
                        <Components.Overlay signinIn={signIn}>
                            <Components.LeftOverlayPanel signinIn={signIn}>
                                <Components.Title>Welcome Back!</Components.Title>
                                <Components.Paragraph>
                                    Login To get updated
                                </Components.Paragraph>
                                <Components.GhostButton onClick={() => toggle(true)}>
                                    LOGIN
                                </Components.GhostButton>
                            </Components.LeftOverlayPanel>

                            <Components.RightOverlayPanel signinIn={signIn}>
                                <Components.Title>Hello, Friend!</Components.Title>
                                <Components.Paragraph>
                                    Start your journey with us
                                </Components.Paragraph>
                                <Components.GhostButton onClick={() => toggle(false)}>
                                    Sign Up
                                </Components.GhostButton>
                            </Components.RightOverlayPanel>
                        </Components.Overlay>
                    </Components.OverlayContainer>
                </Components.Container>
            </div>

            {showSuccessPopup && (
                <div className="success-popup">
                    Successfully registered!
                </div>
            )}
        </body>
    );
}

export default App;
