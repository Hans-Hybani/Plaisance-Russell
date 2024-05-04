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
            // Récupérer le token JWT du sessionStorage
            const token = sessionStorage.getItem('token');
    
            // Vérifier si le token JWT existe
            if (!token) {
                // Rediriger vers la page de connexion s'il n'y a pas de token
                window.location.href = '/AuthentificationCatwaysD';
                return; // Arrêter l'exécution de la fonction
            }
    
            const response = await fetch('https://express-api-port-plaisance-russell.onrender.com/api/catways', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
    
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
                // Récupérer le token JWT du sessionStorage
                const token = sessionStorage.getItem('token');
                
                // Vérifier si le token JWT existe
                if (!token) {
                        // Rediriger vers la page de connexion s'il n'y a pas de token
                        window.location.href = '/AuthentificationCatwaysD';
                        return; // Arrêter l'exécution de la fonction
                }
        
                // Envoyer la requête DELETE avec le token JWT dans le header Authorization
                await fetch(`https://express-api-port-plaisance-russell.onrender.com/api/catway/${catwayId}`, {
                        method: 'DELETE',
                        headers: {
                        'Authorization': `Bearer ${token}`
                        }
                });
        
                // Mettre à jour les données après la suppression du catway
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