import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import "../style/home_style.css"
import { Link } from "react-router-dom";

function AddCatway(props) {

    const [catwayNumber, setCatwayNumber] = useState('');
    const [catwayState, setCatwayState] = useState('');
    const [type, setType] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); 

        const formData = {
            catwayNumber: catwayNumber,
            catwayState: catwayState,
            type: type
        };

        try {
            const response = await axios.post('https://api-port-plaisance-rusell.vercel.app/api/catway', formData);

            if (response.status === 201) {
                console.log('done')
                window.location.href = '/Dashboard';
            } else {
                setErrorMessage('An error occurred. Please try again.');
                console.error('Erreur lors de l\'ajout du catway:', response.data.error.message);
                
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
                    <Form.Group className="mb-3" controlId="formCatwayNumber">
                        <Form.Label>Numéro de Catway</Form.Label>
                        <Form.Control type="number" placeholder="Entrez le numéro de catway" value={catwayNumber} onChange={(e) => setCatwayNumber(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formCatwayState">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" placeholder="Entrez l'état du catway" value={catwayState} onChange={(e) => setCatwayState(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formCatwayType">
                        <Form.Label>Type de Catway</Form.Label>
                        <Form.Control as="select" value={type} onChange={(e) => setType(e.target.value)}>
                            <option value="">Sélectionnez le type de catway</option>
                            <option value="long">Long</option>
                            <option value="short">Court</option>
                        </Form.Control>
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

export default AddCatway;
