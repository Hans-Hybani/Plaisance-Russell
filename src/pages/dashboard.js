import React, { useState, useEffect } from "react";
import '../style/dashboard.css'
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
            await fetch(`https://express-api-port-plaisance-russell.onrender.com/api/user/${userId}`, {
                method: 'DELETE'
            });
            fetchData();
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    // Catway
    const [catways, setCatways] = useState([]);

    useEffect(() => {
        fetchDataCatways();
    }, []);

    const fetchDataCatways = async () => {
        try {
            const response = await fetch('https://express-api-port-plaisance-russell.onrender.com/api/catways');
            if (!response.ok) {
                throw new Error('Error fetching catways');
            }
            const data = await response.json();
            setCatways(data);
        } catch (error) {
            console.error('Error fetching catways:', error);
        }
    };

    const deleteCatway = async (catwayId) => {
        try {
            await fetch(`https://express-api-port-plaisance-russell.onrender.com/api/catway/${catwayId}`, {
                method: 'DELETE'
            });
            fetchDataCatways();
        } catch (error) {
            console.error('Error deleting catway:', error);
        }
    };

    // Reservation
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        fetchDataReservations();
    }, []);

    const fetchDataReservations = async () => {
        try {
            const response = await fetch('https://express-api-port-plaisance-russell.onrender.com/api/reservations');
            if (!response.ok) {
                throw new Error('Error fetching reservations');
            }
            const data = await response.json();
            setReservations(data);
        } catch (error) {
            console.error('Error fetching reservations:', error);
        }
    };

    const deleteReservation = async (catwayId, reservationId) => {
        try {
            await fetch(`https://express-api-port-plaisance-russell.onrender.com/api/catway/${catwayId}/reservations/${reservationId}`, {
                method: 'DELETE'
            });
            fetchDataReservations();
        } catch (error) {
            console.error('Erreur lors de la suppression de la réservation:', error);
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

            <section className="tab__section">
                <h2>Catways</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Cateway Number</th>
                            <th>Cateway State</th>
                            <th>Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {catways.map(catway => (
                            <tr key={catway.id}>
                                <td>{catway.catwayNumber}</td>
                                <td>{catway.catwayState}</td>
                                <td>{catway.type}</td>
                                <td>
                                    <button className="sup" onClick={() => deleteCatway(catway._id)}>Supprimer</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <Link to="/UpdateCatway">
                    <button className="mod">Modifier un catway</button>
                </Link>
            </section>

            <section className="add__user_dah">
                <Link to="/addCatway">
                    <button>Creer un catway</button>
                </Link>
            </section>

            <section className="tab__section">
                <h2>Reservation</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Cateway Number</th>
                            <th>Client Name</th>
                            <th>Boat Name</th>
                            <th>CheckIn</th>
                            <th>CheckOut</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reservations.map(reservation => (
                            <tr key={reservation.id}>
                                <td>{reservation.catwayNumber}</td>
                                <td>{reservation.clientName}</td>
                                <td>{reservation.boatName}</td>
                                <td>{reservation.CheckIn}</td>
                                <td>{reservation.CheckOut}</td>
                                <td>
                                    <button className="sup" onClick={() => deleteReservation(reservation.catwayId, reservation._id)}>Supprimer</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>

            <section className="add__user_dah">
                <Link to="/addReservation">
                    <button>Creer une réservation</button>
                </Link>
            </section>
        </div>
    )
}

export default Dashboard;
