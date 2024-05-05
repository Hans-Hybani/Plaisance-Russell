import React, { useState, useEffect } from "react";
import '../style/dashboard.css'
import { Link } from 'react-router-dom';

function Reservations(params) {
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

    const deleteReservation = async (reservationId) => {
        try {
            // Récupérer le token JWT du sessionStorage
            const token = sessionStorage.getItem('token');
            
            // Vérifier si le token JWT existe
            if (!token) {
                // Rediriger vers la page de connexion s'il n'y a pas de token
                window.location.href = '/login';
                return; // Arrêter l'exécution de la fonction
            }
    
            // Envoyer la requête DELETE avec le token JWT dans le header Authorization
            await fetch(`https://express-api-port-plaisance-russell.onrender.com/api/reservation/${reservationId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            
            // Mettre à jour les données après la suppression de la réservation
            fetchDataReservations();
        } catch (error) {
            console.error('Erreur lors de la suppression de la réservation:', error);
        }
    };
        return(
                <div>
                        <section className="tab__section">
                                <section className="add__user_dah">
                                        <Link to="/Dashboard">
                                                <button>Dashboard</button>
                                        </Link>
                                </section>
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
                                                        <button className="sup" onClick={() => deleteReservation(reservation._id)}>Supprimer</button>
                                                        </td>
                                                </tr>
                                                ))}
                                        </tbody>
                                </table>
                        </section>
                </div>
        )
}

export default Reservations;