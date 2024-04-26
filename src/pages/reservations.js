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

export default Reservations;