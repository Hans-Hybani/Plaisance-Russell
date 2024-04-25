import React from "react";

function Catway(params) {
        const data = [
                { id: 1, nom: 'John Doe', email: 'john@example.com' },
                { id: 2, nom: 'Jane Smith', email: 'jane@example.com' },
                { id: 3, nom: 'Alice Johnson', email: 'alice@example.com' }
              ];
        return(
                <div>
                        <h1> TABLEAU DE BORD </h1>
                        <section className="tab__section">
                                <h2>Catways</h2>
                                        <table className="table">
                                                <thead>
                                                        <tr>
                                                        <th>Détails</th>
                                                        <th>Cateway Number</th>
                                                        <th>Type</th>
                                                        </tr>
                                                </thead>
                                                <tbody>
                                                        {data.map(item => (
                                                        <tr key={item.id}>
                                                                <td>{item.nom}</td>
                                                                <td>{item.email}</td>
                                                                <td>
                                                                        <button className="mod">Modifier</button>
                                                                </td>
                                                                <td>
                                                                        <button className="sup">Supprimer</button>
                                                                </td>
                                                                <td>
                                                                        <button className="det">Details</button>
                                                                </td>
                                                        </tr>
                                                        ))}
                                                </tbody>
                                        </table>
                        </section>

                </div>
        )
}

export default Catway;