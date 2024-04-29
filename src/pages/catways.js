import React, { useState, useEffect } from "react";
import '../style/dashboard.css'
import { Link } from 'react-router-dom';

function Catways(params) {
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

        return(
                <div>
                        <section className="tab__section">
                                <h2>Catways</h2>

                                <section className="add__user_dah">
                                        <Link to="/Dashboard">
                                                <button>Dashboard</button>
                                        </Link>
                                </section>

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
                </div>
        )
}

export default Catways;