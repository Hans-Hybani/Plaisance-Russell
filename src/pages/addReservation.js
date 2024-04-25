import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'; 
import "../style/home_style.css"
import { Link } from "react-router-dom";

function AddReservation(props) {

    const [catwayNumber, setCatwayNumber] = useState('');
    const [clientName, setClientName] = useState('');
    const [boatName, setBoatName] = useState('');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); 

        const formData = {
            catwayNumber: catwayNumber,
            clientName: clientName,
            boatName: boatName,
            CheckIn: checkIn,
            CheckOut: checkOut
        };

        try {
            const response = await axios.post('https://api-port-plaisance-rusell.vercel.app/api/reservation', formData);

            if (response.status === 201) {
                console.log('done')
                window.location.href = '/Dashboard';
            } else {
                setErrorMessage('An error occurred. Please try again.');
                console.error('Erreur lors de l\'ajout de la réservation:', response.data.error);
            }
        } catch (error) {
            console.error('Erreur lors de la requête:', error);
        }
    };

    return (
        <div>
            <section className="section__connexion">
                <h2>Ajouter une réservation</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formCatwayNumber">
                        <Form.Label>Numéro de Catway</Form.Label>
                        <Form.Control type="number" placeholder="Entrez le numéro de catway" value={catwayNumber} onChange={(e) => setCatwayNumber(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formClientName">
                        <Form.Label>Nom du client</Form.Label>
                        <Form.Control type="text" placeholder="Entrez le nom du client" value={clientName} onChange={(e) => setClientName(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBoatName">
                        <Form.Label>Nom du bateau</Form.Label>
                        <Form.Control type="text" placeholder="Entrez le nom du bateau" value={boatName} onChange={(e) => setBoatName(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formCheckIn">
                        <Form.Label>Date d'arrivée</Form.Label>
                        <Form.Control type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formCheckOut">
                        <Form.Label>Date de départ</Form.Label>
                        <Form.Control type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Ajouter la réservation
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

export default AddReservation;
