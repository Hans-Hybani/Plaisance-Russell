import React, { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import '../style/updateUser.css';

function UpdateCatway(props) {
    const location = useLocation();
    const [editedCatwayData, setEditedCatwayData] = useState({ catwayNumber: '', catwayState: '', type: '' });
    const [selectedCatwayId, setSelectedCatwayId] = useState('');
    const [selectedCatwayMessage, setSelectedCatwayMessage] = useState('');
    const [catways, setCatways] = useState([]);

    useEffect(() => {
        fetchData();
        if (location.state && location.state.catway) {
            const { catwayNumber, catwayState, type } = location.state.catway;
            setEditedCatwayData({ catwayNumber, catwayState, type });
            setSelectedCatwayId(location.state.catway._id);
            setSelectedCatwayMessage('');
        }
    }, [location]);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://api-port-plaisance-rusell.vercel.app/api/catways');
            setCatways(response.data);
        } catch (error) {
            console.error('Error fetching catways:', error);
        }
    };

    const updateCatway = async () => {
        if (!selectedCatwayId) {
            setSelectedCatwayMessage('Veuillez sélectionner un catway.');
            return;
        }

        try {
            await axios.put(`https://api-port-plaisance-rusell.vercel.app/api/catway/${selectedCatwayId}`, editedCatwayData);
            fetchData();
            setEditedCatwayData({ catwayNumber: '', catwayState: '', type: '' });
            setSelectedCatwayId('');
            setSelectedCatwayMessage('');
            window.location.href = '/Dashboard';
        } catch (error) {
            console.error('Error updating catway:', error);
        }
    };

    const handleCatwaySelection = (catwayId) => {
        setSelectedCatwayId(catwayId);
        const selectedCatway = catways.find(catway => catway._id === catwayId);
        setEditedCatwayData({ catwayNumber: selectedCatway.catwayNumber, catwayState: selectedCatway.catwayState, type: selectedCatway.type });
        setSelectedCatwayMessage('');
    };

    return (
        <div>
            <h2>Modifier un catway</h2>
            <section className="section__connexion">
                <Form onSubmit={updateCatway}>
                    <Form.Group className="mb-3" controlId="formCatwayState">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" placeholder="Entrez l'état du catway" value={editedCatwayData.catwayState} onChange={(e) => setEditedCatwayData({ ...editedCatwayData, catwayState: e.target.value })} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Modifier le catway
                    </Button>
                    <section className="add__user_dah large">
                        <Link to="/Dashboard">
                            <button>Retour au tableau de bord</button>
                        </Link>
                    </section>

                    {selectedCatwayMessage && <p className="text-danger">{selectedCatwayMessage}</p>}
                </Form>
            </section>
            <section>
                <h2>Sélectionnez un catway à modifier :</h2>
                <ul className="user-list">
                    {catways.map(catway => (
                        <li key={catway._id}>
                            <Button variant="outline-primary" onClick={() => handleCatwaySelection(catway._id)}>
                                {catway.catwayNumber} - {catway.catwayState}
                            </Button>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}

export default UpdateCatway;
