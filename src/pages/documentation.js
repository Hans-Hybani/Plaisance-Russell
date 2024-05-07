import React from "react";
import { Link } from 'react-router-dom';

function Documentation(params) {
        return(
                <div>
                        <section>
                                <h1>MODE D’EMPLOI DU SERVICE WEB</h1>
                        </section> 
                        <section className="add__user_dah">
                                <Link to="/Home">
                                        <button>Home</button>
                                </Link>
                        </section> 
                        <section className="liste_api">
                                <ul>
                                Cette API permet de : 
                                        <li>Créer un utilisateur</li>
                                        <li>Supprimer un utilisateur</li>
                                        <li>Modifier un utilisateur</li>
                                        <li>Lister les utilisateurs</li>
                                        <li>Créer un catway</li>
                                        <li>Supprimer un catway</li>
                                        <li>Modifier un catway</li>
                                        <li>Lister les catway</li>
                                        <li>Créer la résevation d'un catway</li>
                                        <li>Supprimer la résevation d'un catway</li>
                                        <li>Lister les réservations</li>
                                </ul>
                        </section>
                        <section>
                                <h2>1. Type de requête</h2>
                                <p className="p__titre"> Afin de tester les services Web, il vous sera peut être nécessaire d’utiliser une application comme POSTMAN. <br/>
                                Il est également important de savoir que les routes sont authentifier, il vous sera donc nécessaire de passer le token d'authentification au header afin d'éviter tout message d'erreur.</p>
                                <p>Pour générer un token il faut une connexion : voir la zone CONNEXION, sinon voir la zone INSCRIPTION puis CONNEXION</p>
                                <p>Pour passer le token au headers : Allez dans : Headers ; Key : Authorization, Value : Bearer (votre token)</p>
                                <div className="texte">
                                        {/* Connexion ROUTE */}
                                        <h3>Connexion</h3>
                                        <p>La connexion se fait via l’appel d’une API à l’aide d’un couple E-mail/mot de passe.</p>
                                        <p>Méthode POST</p>
                                        <p>Url d’accès : <br/>
                                        <Link to="https://express-api-port-plaisance-russell.onrender.com/login" target="_blank">https://express-api-port-plaisance-russell.onrender.com/login</Link>
                                        </p>
                                        <table>
                                                <tr>
                                                        <th>Variables Caractéristiques</th>
                                                        <th>Description</th>
                                                </tr>
                                                <tr>
                                                        <td>email</td>
                                                        <td>Login du compte utilisateur (tel que transmis lors de la création de votre compte sur l'application PORT PLAISANCE RUSELL)</td>
                                                </tr>
                                                <tr>
                                                        <td>password</td>
                                                        <td>Mot de passe du compte utilisateur</td>
                                                </tr>
                                        </table>
                                        <p>JSON à envoyer dans le BODY :</p>
                                                <p>{"{"}</p>
                                                <p>&nbsp;&nbsp;&nbsp;"email": "your_email",</p>
                                                <p>&nbsp;&nbsp;&nbsp;"password": "your_password"</p>
                                                <p>{"}"}
                                        </p>
                                        <p>Sortie :</p>
                                        <table>
                                                <tr>
                                                        <th>UserId</th>
                                                        <th>Token</th>
                                                </tr>
                                                <tr>
                                                        <td>Dans la réponse, fourniture d’un id XXXXXX</td>
                                                        <td>Dans la réponse, fourniture d’un token envoyer dans le Headers : Authorization : Bearer XXXXXXX</td>
                                                </tr>
                                        </table>
                                        <p>Exemple de réponse : </p>
                                        <p>{"{"}</p>
                                                <p>&nbsp;&nbsp;&nbsp;"userId": "184cbb18324930ffdfdea4366",</p>
                                                <p>&nbsp;&nbsp;&nbsp;"token": "RI61z3fdq2E00bPfsK6Ud4nGNYm4l6U1IRz3fdq2E00bPfsK6Ud4nGNYm4l6U1eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJ1c2VySWQiOiI2NjM0YWVm<br/>
                                                ZGZmMDkzNDIzODFiYmM0ODEiLCJpYXQiOjE3MTUwNzI1NjQsImV4cCI6MTcxNTE1ODk2NH0.7G6PQ9.z3fdq2E00bPfsK6Ud4nGNYm4l6U1eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"</p>
                                                <p>{"}"}
                                        </p>
                                        {/* Inscription ROUTE */}
                                        <h3>Inscription</h3>
                                        <p>L'inscription se fait via l’appel d’une API à l’aide d'un nom, d'un E-mail et d'un mot de passe.</p>
                                        <p>Méthode POST</p>
                                        <p>Url d’accès : <br/>
                                        <Link to="https://express-api-port-plaisance-russell.onrender.com/signup" target="_blank">https://express-api-port-plaisance-russell.onrender.com/signup</Link>
                                        </p>
                                        <table>
                                                <tr>
                                                        <th>Variables Caractéristiques</th>
                                                        <th>Description</th>
                                                </tr>
                                                <tr>
                                                        <td>Name</td>
                                                        <td>Nom d'utilisateur</td>
                                                </tr>
                                                <tr>
                                                        <td>Email</td>
                                                        <td>Adresse mail</td>
                                                </tr>
                                                <tr>
                                                        <td>Password</td>
                                                        <td>mot de passe</td>
                                                </tr>
                                        </table>
                                        <p>JSON à envoyer dans le BODY :</p>
                                                <p>{"{"}</p>
                                                <p>&nbsp;&nbsp;&nbsp;"name": "your_name",</p>
                                                <p>&nbsp;&nbsp;&nbsp;"mail": "your_mail"</p>
                                                <p>&nbsp;&nbsp;&nbsp;"password": "your_password"</p>
                                                <p>{"}"}
                                        </p>
                                        <p>Sortie :</p>
                                        <p>Exemple de réponse : </p>
                                        <p>{"{"}</p>
                                                <p>&nbsp;&nbsp;&nbsp;"message": "Utilisateur créé !"</p>
                                                <p>{"}"}
                                        </p>
                                        {/* Utilisateur */}
                                        <h3>Liste des utilisateurs</h3>
                                        <p>Cette route permet de lister les utilisateurs </p>
                                        <p>Méthode GET</p>
                                        <p>Url d’accès : <br/>
                                        <Link to="https://express-api-port-plaisance-russell.onrender.com/api/users" target="_blank">https://express-api-port-plaisance-russell.onrender.com/api/users</Link>
                                        </p>
                                        <table>
                                                <tr>
                                                        <th>Variables Caractéristiques</th>
                                                        <th>Description</th>
                                                </tr>
                                                <tr>
                                                        <td>Name</td>
                                                        <td>Nom d'utilisateur</td>
                                                </tr>
                                                <tr>
                                                        <td>Email</td>
                                                        <td>Adresse mail</td>
                                                </tr>
                                                <tr>
                                                        <td>Password</td>
                                                        <td>mot de passe</td>
                                                </tr>
                                        </table>
                                        <p>Sortie :</p>
                                        <p>Exemple de réponse : </p>
                                        <p>{"{"}</p>
                                                <p>&nbsp;&nbsp;&nbsp;"_id": "3929bc17d16454321b935830c",</p>
                                                <p>&nbsp;&nbsp;&nbsp;"name": "xxxx",</p>
                                                <p>&nbsp;&nbsp;&nbsp;"email": "xxxx@gmail.com",</p>
                                                <p>&nbsp;&nbsp;&nbsp;"password": "xTH4ZqS0AlBmZaJhdXO.ke6DRM/fCDoUmd1QrFlOjNQBM2srBIPtK$2b$10"</p>
                                                <p>{"}"}
                                        </p>
                                        {/* Suppression Utilisateur */}
                                        <h3>Suppression d'utilisateur</h3>
                                        <p>Cette route permet de supprimer les utilisateurs </p>
                                        <p>Méthode DELETE</p>
                                        <p>Url d’accès : <br/>
                                        <Link to="https://express-api-port-plaisance-russell.onrender.com/api/user/:id" target="_blank">https://express-api-port-plaisance-russell.onrender.com/api/user/:id</Link>
                                        </p>
                                        <p>Pour tester l'API vous devez passer l'id de l'utilisateur que vous voulez supprimer. <br/>
                                        Ensuite vous allez donner au header le token envoyer lors de la connexion de cette utilisateur.</p>
                                        <p>Exemple de l'url de test : https://express-api-port-plaisance-russell.onrender.com/api/user/3929bc17d16454321b935830c</p>
                                        <p>Puis vous allez dans : Headers ; Key : Authorization, Value : Bearer (votre token)</p>
                                        <p>Exemple de réponse : </p>
                                        <p>{"{"}</p>
                                                <p>&nbsp;&nbsp;&nbsp;"message": "Utilisateur supprimé !"</p>
                                                <p>{"}"}
                                        </p>
                                        {/* Création d'un catway */}
                                        <h3>Création d'un catway</h3>
                                        <p>Il est important de passer le token au headers afin de pouvoir créer un catway</p>
                                        <p>Méthode POST</p>
                                        <p>Url d’accès : <br/>
                                        <Link to="https://express-api-port-plaisance-russell.onrender.com/api/catway" target="_blank">https://express-api-port-plaisance-russell.onrender.com/api/catway</Link>
                                        </p>
                                        <table>
                                                <tr>
                                                        <th>Variables Caractéristiques</th>
                                                        <th>Description</th>
                                                </tr>
                                                <tr>
                                                        <td>CatwayNumber</td>
                                                        <td>Numéro du catway</td>
                                                </tr>
                                                <tr>
                                                        <td>CatwayState</td>
                                                        <td>Description du catway</td>
                                                </tr>
                                                <tr>
                                                        <td>type</td>
                                                        <td>Type du catway</td>
                                                </tr>
                                        </table>
                                        <p>JSON à envoyer dans le BODY :</p>
                                                <p>{"{"}</p>
                                                <p>&nbsp;&nbsp;&nbsp;"catwayNumber": 6,</p>
                                                <p>&nbsp;&nbsp;&nbsp;"catwayState": "test postman",</p>
                                                <p>&nbsp;&nbsp;&nbsp;"type": "long"</p>
                                                <p>{"}"}
                                        </p>
                                        <p>Sortie :</p>
                                        <p>Exemple de réponse : </p>
                                        <p>{"{"}</p>
                                                <p>&nbsp;&nbsp;&nbsp;"message": "Catway enregistré !"</p>
                                                <p>{"}"}
                                        </p>
                                        {/* Modifier un catway */}
                                        <h3>Modification d'un catway</h3>
                                        <p>Pour tester l'API vous devez passer l'id du catway que vous voulez modifier<br/></p>
                                        <p>Exemple de l'url de test : https://express-api-port-plaisance-russell.onrender.com/api/catway/663a06dc33412f18729ad6b9</p>
                                        <p>Méthode PUT</p>
                                        <p>Url d’accès : <br/>
                                        <Link to="https://express-api-port-plaisance-russell.onrender.com/api/catway/:id" target="_blank">https://express-api-port-plaisance-russell.onrender.com/api/catways:id</Link>
                                        </p>
                                        <p>JSON à envoyer dans le BODY :</p>
                                                <p>{"{"}</p>
                                                <p>&nbsp;&nbsp;&nbsp;"catwayState": "test postman",</p>
                                                <p>{"}"}
                                        </p>
                                        <p>Sortie :</p>
                                        <p>Exemple de réponse : </p>
                                        <p>{"{"}</p>
                                                <p>&nbsp;&nbsp;&nbsp;"message": "Catway modifié !"</p>
                                                <p>{"}"}
                                        </p>
                                        {/* Lister les catways */}
                                        <h3>Lister les catways</h3>
                                        <p>Cette route permet de lister les catways</p>
                                        <p>Pour tester l'API vous devez passer dans le header le token générer lors de la connexion de l'utilisateur</p>
                                        <p>Comment ? = : Headers ; Key : Authorization, Value : Bearer (votre token)</p>
                                        <p>Méthode GET</p>
                                        <p>Url d’accès : <br/>
                                        <Link to="https://express-api-port-plaisance-russell.onrender.com/api/catways" target="_blank">https://express-api-port-plaisance-russell.onrender.com/api/catways</Link>
                                        </p>
                                        <table>
                                                <tr>
                                                        <th>Variables Caractéristiques</th>
                                                        <th>Description</th>
                                                </tr>
                                                <tr>
                                                        <td>CatwayNumber</td>
                                                        <td>Numéro du catway</td>
                                                </tr>
                                                <tr>
                                                        <td>CatwayState</td>
                                                        <td>Description du catway</td>
                                                </tr>
                                                <tr>
                                                        <td>type</td>
                                                        <td>Type du catway</td>
                                                </tr>
                                        </table>
                                        <p>Sortie :</p>
                                        <p>Exemple de réponse : </p>
                                        <p>{"{"}</p>
                                                <p>&nbsp;&nbsp;&nbsp;"_id": "5969bc77f17457391h75840k",</p>
                                                <p>&nbsp;&nbsp;&nbsp;"catwayNumber": 11,</p>
                                                <p>&nbsp;&nbsp;&nbsp;"catwayState": "Description du catway",</p>
                                                <p>&nbsp;&nbsp;&nbsp;"type": "long"</p>
                                                <p>{"}"}
                                        </p>
                                        {/* Suppression d'un catway */}
                                        <h3>Suppression d'un catway</h3>
                                        <p>Cette route permet de supprimer un catway</p>
                                        <p>Méthode DELETE</p>
                                        <p>Url d’accès : <br/>
                                        <Link to="https://express-api-port-plaisance-russell.onrender.com/api/catway/:id" target="_blank">https://express-api-port-plaisance-russell.onrender.com/api/catway/:id</Link>
                                        </p>
                                        <p>Pour tester l'API vous devez passer l'id du catway que vous voulez supprimer. <br/>
                                        Ensuite vous allez donner au header le token envoyer lors de votre connexion à la platforme</p>
                                        <p>Exemple de l'url de test : https://express-api-port-plaisance-russell.onrender.com/api/catway/663a06dc33412f18729ad6b9</p>
                                        <p>Puis vous allez dans : Headers ; Key : Authorization, Value : Bearer (votre token)</p>
                                        <p>Exemple de réponse : </p>
                                        <p>{"{"}</p>
                                                <p>&nbsp;&nbsp;&nbsp;"message": "Catway supprimé !"</p>
                                                <p>{"}"}
                                        </p>
                                        {/* Création d'une reservation */}
                                        <h3>Création d'une réservation</h3>
                                        <p>Il est important de passer le token au headers afin de pouvoir créer une réservation</p>
                                        <p>Il est important de ne pas oublier de passer l'id du catway à associer à une réservation</p>
                                        <p>Méthode POST</p>
                                        <p>Url d’accès : <br/>
                                        <Link to="https://express-api-port-plaisance-russell.onrender.com/api/catways/:id/reservations" target="_blank">https://express-api-port-plaisance-russell.onrender.com/api/catways/:id/reservations</Link>
                                        </p>
                                        <table>
                                                <tr>
                                                        <th>Variables Caractéristiques</th>
                                                        <th>Description</th>
                                                </tr>
                                                <tr>
                                                        <td>CatwayNumber</td>
                                                        <td>Numéro du catway</td>
                                                </tr>
                                                <tr>
                                                        <td>clientName</td>
                                                        <td>Nom du client</td>
                                                </tr>
                                                <tr>
                                                        <td>boatName</td>
                                                        <td>Nom du bateau</td>
                                                </tr>
                                                <tr>
                                                        <td>CheckIn</td>
                                                        <td>Date d'arrivée</td>
                                                </tr>
                                                <tr>
                                                        <td>CheckOut</td>
                                                        <td>Date de départ</td>
                                                </tr>
                                        </table>
                                        <p>JSON à envoyer dans le BODY :</p>
                                                <p>{"{"}</p>
                                                <p>&nbsp;&nbsp;&nbsp;"catwayNumber": 6,</p>
                                                <p>&nbsp;&nbsp;&nbsp;"clientName": "XXXXXX",</p>
                                                <p>&nbsp;&nbsp;&nbsp;"boatName": "XXXX"</p>
                                                <p>&nbsp;&nbsp;&nbsp;"CheckIn": "2024-05-01"</p>
                                                <p>&nbsp;&nbsp;&nbsp;"CheckOut": "2024-05-01"</p>
                                                <p>{"}"}
                                        </p>
                                        <p>Sortie :</p>
                                        <p>Exemple de réponse : </p>
                                        <p>{"{"}</p>
                                                <p>&nbsp;&nbsp;&nbsp;"message": "Réservation enregistrée !"</p>
                                                <p>{"}"}
                                        </p>
                                        {/* Suppression d'une reservation */}
                                        <h3>Suppression d'une réservation</h3>
                                        <p>Cette route permet de supprimer une réservation</p>
                                        <p>Méthode DELETE</p>
                                        <p>Url d’accès : <br/>
                                        <Link to="https://express-api-port-plaisance-russell.onrender.com/api/reservation/:id" target="_blank">https://express-api-port-plaisance-russell.onrender.com/api/reservation/:id</Link>
                                        </p>
                                        <p>Pour tester l'API vous devez passer l'id de la réservation que vous voulez supprimer. <br/>
                                        Ensuite vous allez donner au header le token envoyer lors de votre connexion à la platforme</p>
                                        <p>Exemple de l'url de test : https://express-api-port-plaisance-russell.onrender.com/api/reservation/663a06dc33412f18729ad6b9</p>
                                        <p>Puis vous allez dans : Headers ; Key : Authorization, Value : Bearer (votre token)</p>
                                        <p>Exemple de réponse : </p>
                                        <p>{"{"}</p>
                                                <p>&nbsp;&nbsp;&nbsp;"message": "Réservation supprimée !"</p>
                                                <p>{"}"}
                                        </p>
                                        {/* Lister les reservation */}
                                        <h3>Lister les réservations</h3>
                                        <p>Cette route permet de lister les réservations</p>
                                        <p>Pour tester l'API vous devez passer dans le header le token générer lors de la connexion de l'utilisateur</p>
                                        <p>Comment ? = : Headers ; Key : Authorization, Value : Bearer (votre token)</p>
                                        <p>Méthode GET</p>
                                        <p>Url d’accès : <br/>
                                        <Link to="https://express-api-port-plaisance-russell.onrender.com/api/reservations" target="_blank">https://express-api-port-plaisance-russell.onrender.com/api/reservations</Link>
                                        </p>
                                        <table>
                                                <tr>
                                                        <th>Variables Caractéristiques</th>
                                                        <th>Description</th>
                                                </tr>
                                                <tr>
                                                        <td>CatwayNumber</td>
                                                        <td>Numéro du catway</td>
                                                </tr>
                                                <tr>
                                                        <td>clientName</td>
                                                        <td>Nom du client</td>
                                                </tr>
                                                <tr>
                                                        <td>boatName</td>
                                                        <td>Nom du bateau</td>
                                                </tr>
                                                <tr>
                                                        <td>CheckIn</td>
                                                        <td>Date d'arrivée</td>
                                                </tr>
                                                <tr>
                                                        <td>CheckOut</td>
                                                        <td>Date de départ</td>
                                                </tr>
                                        </table>
                                        <p>Sortie :</p>
                                        <p>Exemple de réponse : </p>
                                        <p>{"{"}</p>
                                                <p>&nbsp;&nbsp;&nbsp;"_id": "5969bc77f17457391h75840k",</p>
                                                <p>&nbsp;&nbsp;&nbsp;"catwayNumber": 6,</p>
                                                <p>&nbsp;&nbsp;&nbsp;"clientName": "XXXXXX",</p>
                                                <p>&nbsp;&nbsp;&nbsp;"boatName": "XXXX"</p>
                                                <p>&nbsp;&nbsp;&nbsp;"CheckIn": "2024-05-01"</p>
                                                <p>&nbsp;&nbsp;&nbsp;"CheckOut": "2024-05-01"</p>
                                                <p>{"}"}
                                        </p>
                                </div>
                        </section>
                </div>
        )
}

export default Documentation;
