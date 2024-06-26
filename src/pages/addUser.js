import React, { useState } from "react";
import "../style/home_style.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";

function AddUser(props) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); 
    
        const formData = {
            name: name,
            email: email,
            password: password
        };
    
        try {
            // Récupérer le token JWT du sessionStorage
            const token = sessionStorage.getItem('token');
            
            // Vérifier si le token JWT existe
            if (!token) {
                // Rediriger vers la page de connexion s'il n'y a pas de token
                window.location.href = '/AuthentificationAddUser';
                return; // Arrêter l'exécution de la fonction
            }
    
            const response = await fetch('https://express-api-port-plaisance-russell.onrender.com/AddUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}` // Ajouter le token JWT dans le header Authorization
                },
                body: JSON.stringify(formData),
            });
    
            if (response.status === 201) {
                console.log('done')
                window.location.href = '/Dashboard';
            } else {
                const data = await response.json();
                setErrorMessage('Une erreur s\'est produite. Veuillez réessayer.');
                console.error('Erreur lors de l\'inscription:', data.error);
            }
        } catch (error) {
            console.error('Erreur lors de la requête:', error);
        }
    };

    return (
        <div>
            <section className="section__connexion">
                <h2>Inscrivez-vous !</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Nom</Form.Label>
                        <Form.Control type="text" placeholder="Entrez votre nom" value={name} onChange={(e) => setName(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <Form.Text className="text-muted">
                            Nous ne partagerons jamais votre email avec quelqu'un d'autre.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Mot de passe</Form.Label>
                        <Form.Control type="password" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>
                
                    <Button variant="primary" type="submit">
                        Inscription
                    </Button>

                    {errorMessage && <p className="text-danger">{errorMessage}</p>}
                </Form>
            </section>
            <section className="add__user_dah">
                    <Link to="/Dashboard">
                        <button>Dashboard</button>
                    </Link>
            </section>
        </div>
    );
}

export default AddUser;
