import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import '../style/updateUser.css'
import { Link } from 'react-router-dom';


function UpdateUser(props) {
    const location = useLocation();
    const [editedUserData, setEditedUserData] = useState({ name: '', email: '', password: '' });
    const [selectedUserId, setSelectedUserId] = useState('');
    const [selectedUserMessage, setSelectedUserMessage] = useState('');
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchData();
        if (location.state && location.state.user) {
            const { name, email } = location.state.user;
            setEditedUserData({ name, email });
            setSelectedUserId(location.state.user._id);
            setSelectedUserMessage('');
        }
    }, [location]);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://api-port-plaisance-rusell.vercel.app/api/users');
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const updateUser = async () => {
        if (!selectedUserId) {
            setSelectedUserMessage('Veuillez sélectionner un utilisateur.');
            return;
        }

        try {
            await axios.put(`https://api-port-plaisance-rusell.vercel.app/api/user/${selectedUserId}`, editedUserData);
            fetchData();
            setEditedUserData({ name: '', email: '', password: '' });
            setSelectedUserId('');
            setSelectedUserMessage('');
            window.location.replace('/Dashboard');
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    const handleUserSelection = (userId) => {
        setSelectedUserId(userId);
        const selectedUser = users.find(user => user._id === userId);
        setEditedUserData({ name: selectedUser.name, email: selectedUser.email });
        setSelectedUserMessage('');
    };

    return (
        <div>
                <h2>Modifier un utilisateur</h2>
            <section className="section__connexion">
                <Form onSubmit={updateUser}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Nom</Form.Label>
                        <Form.Control type="text" placeholder="Entrez le nouveau nom" value={editedUserData.name} onChange={(e) => setEditedUserData({ ...editedUserData, name: e.target.value })} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Entrez le nouvel email" value={editedUserData.email} onChange={(e) => setEditedUserData({ ...editedUserData, email: e.target.value })} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Mot de passe</Form.Label>
                        <Form.Control type="password" placeholder="Entrez le nouveau mot de passe" value={editedUserData.password} onChange={(e) => setEditedUserData({ ...editedUserData, password: e.target.value })} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Modifier l'utilisateur
                    </Button>
                    <section className="add__user_dah large">
                        <Link to="/Dashboard">
                                <button>Retour au tableau de bord</button>
                        </Link>
                    </section>

                    {selectedUserMessage && <p className="text-danger">{selectedUserMessage}</p>}
                </Form>
            </section>
            <section>
                <h2>Sélectionnez un utilisateur à modifier :</h2>
                <ul className="user-list">
                        {users.map(user => (
                                <li key={user._id}>
                                        <Button variant="outline-primary" onClick={() => handleUserSelection(user._id)}>
                                                {user.name} - {user.email}
                                        </Button>
                                </li>
                        ))}
                </ul>
            </section>
     
        </div>
    );
}

export default UpdateUser;
