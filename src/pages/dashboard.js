import React, { useState, useEffect } from "react";
import '../style/dashboard.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

function Dashboard(params) {
    // User
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('https://express-api-port-plaisance-russell.onrender.com/api/users');
            if (!response.ok) {
                throw new Error('Error fetching users');
            }
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

const deleteUser = async (userId) => {
    try {
        // Récupérer le token JWT du sessionStorage
        const token = sessionStorage.getItem('token');
        
        // Vérifier si le token JWT existe
        if (!token) {
            // Rediriger vers la page de connexion s'il n'y a pas de token
            window.location.href = '/AuthentificationUser';
            return; // Arrêter l'exécution de la fonction
        }

        // Envoyer la requête DELETE avec le token JWT dans le header Authorization
        await fetch(`https://express-api-port-plaisance-russell.onrender.com/api/user/${userId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        // Mettre à jour les données après la suppression de l'utilisateur
        fetchData();
    } catch (error) {
        console.error('Error deleting user:', error);
    }
};

    // Catway
    const [catwayNumber, setCatwayNumber] = useState('');
    const [catwayState, setCatwayState] = useState('');
    const [type, setType] = useState('');
    const [errorMessageCat, setErrorMessageCat] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); 
    
        const formData = {
            catwayNumber: catwayNumber,
            catwayState: catwayState,
            type: type
        };
    
        try {
            // Récupérer le token JWT du sessionStorage
            const token = sessionStorage.getItem('token');
            
            // Vérifier si le token JWT existe
            if (!token) {
                // Rediriger vers la page de connexion s'il n'y a pas de token
                window.location.href = '/authentificationUser';
                return; // Arrêter l'exécution de la fonction
            }
    
            const response = await fetch('https://express-api-port-plaisance-russell.onrender.com/api/catway', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(formData),
            });
    
            if (response.status === 201) {
                console.log('done')
            } else {
                const data = await response.json();
                setErrorMessageCat('Une erreur s\'est produite. Veuillez réessayer.');
                console.error('Erreur lors de l\'ajout du catway:', data.error.message);
            }
        } catch (error) {
            console.error('Erreur lors de la requête:', error);
        }
    };

    // Reservation
    const [clientName, setClientName] = useState('');
    const [boatName, setBoatName] = useState('');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmitRese = async (e) => {
        e.preventDefault(); 
    
        const formData = {
            catwayNumber: catwayNumber,
            clientName: clientName,
            boatName: boatName,
            CheckIn: checkIn,
            CheckOut: checkOut
        };
    
        try {
            // Récupérer le token JWT du sessionStorage
            const token = sessionStorage.getItem('token');
            
            // Vérifier si le token JWT existe
            if (!token) {
                // Rediriger vers la page de connexion s'il n'y a pas de token
                window.location.href = '/authentificationUser';
                return; // Arrêter l'exécution de la fonction
            }
    
            const response = await fetch('https://express-api-port-plaisance-russell.onrender.com/api/catways/:id/reservations', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}` // Ajouter le token JWT dans le header Authorization
                },
                body: JSON.stringify(formData),
            });
    
            if (response.status === 201) {
                console.log('done')
            } else {
                const data = await response.json();
                setErrorMessage('Une erreur s\'est produite. Veuillez réessayer.');
                console.error('Erreur lors de l\'ajout de la réservation:', data.error);
            }
        } catch (error) {
            console.error('Erreur lors de la requête:', error);
        }
    };
    
    return(
        <div>
            <h1> TABLEAU DE BORD </h1>
            <section className="add__user_dah">
                <Link to="/Home">
                    <button>Déconnexion</button>
                </Link>
            </section>
            <section className="tab__section">
                <h2>Utilisateur</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button className="sup" onClick={() => deleteUser(user._id)}>Supprimer</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <Link to="/UpdateUser" className="upButton">
                    <button className="mod">Modifier un utilisateur</button>
                </Link>
            </section>

            <section className="add__user_dah">
                <Link to="/addUser">
                    <button>Creer un utilisateur</button>
                </Link>
            </section>

            <section className="section__connexion">
                <h2>Ajouter un Catway</h2>
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
                        Ajouter le Catway
                    </Button>

                    {errorMessageCat && <p className="text-danger">{errorMessageCat}</p>}
                </Form>
            </section>

            <section className="add__user_dah">
                <Link to="/Catways">
                    <button>Voir les catways</button>
                </Link>
            </section>

            <section className="section__connexion">
                <h2>Ajouter une réservation</h2>
                <Form onSubmit={handleSubmitRese}>
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
                <Link to="/Reservations">
                    <button>Voir les réservations</button>
                </Link>
            </section>

        </div>
    )
}

export default Dashboard;
