import React, { useState } from 'react';
import "../style/home_style.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

function Home(params) {

        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [errorMessage, setErrorMessage] = useState('');
    
        const handleEmailChange = (e) => {
            setEmail(e.target.value);
        };
    
        const handlePasswordChange = (e) => {
            setPassword(e.target.value);
        };
    
    
        const handleSubmit = async (e) => {
            e.preventDefault();
            
            try {
                const response = await fetch('https://api-port-plaisance-rusell.vercel.app/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: email,
                        password: password,
                    })
                });
    
                if (!response.ok) {
                    throw new Error('Failed to submit form');
                }

                window.location.href = '/Dashboard';
            } catch (error) {
           
                console.error('Error submitting form:', error);
                setErrorMessage('An error occurred. Please try again.');
            }
        }; 

        return(
                <div>
                        <section className="section__titre">
                                <h1>PORT PLAISANCE RUSELL</h1>
                                <p>Loerm ipsum dolor sit amen</p>
                        </section>

                        <section className="section__connexion">
                                <h2>Veuillez vous connecter !</h2>
                                        <Form onSubmit={handleSubmit}>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                        <Form.Label>Email address</Form.Label>
                                                        <Form.Control type="email" placeholder="Enter email" value={email} onChange={handleEmailChange} />
                                                        <Form.Text className="text-muted">
                                                        We'll never share your email with anyone else.
                                                        </Form.Text>
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                                        <Form.Label>Password</Form.Label>
                                                        <Form.Control type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
                                                </Form.Group>

                                                <Button variant="primary" type="submit">
                                                        Connexion
                                                </Button>
                                                <Link to="/Inscription">
                                                        Inscription
                                                </Link>

                                                {errorMessage && <p className="text-danger">{errorMessage}</p>}
                                        </Form>
                        </section>

                        <section className="section__documentation">
                                <h3>Lire la documentation</h3>
                                <link/>
                        </section>
s                </div>
        );
}

export default Home;