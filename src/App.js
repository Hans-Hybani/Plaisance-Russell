import {Routes,Route } from "react-router-dom/dist";
import Home from './pages/home';
import Inscription from "./pages/inscription";
import Dashboard from "./pages/dashboard";
import Documentation from "./pages/documentation";
import Catways from "./pages/catways";
import Reservations from "./pages/reservations";
import AddUser from "./pages/addUser";
import UpdateUser from "./pages/updateUser";
import UpdateCatway from "./pages/updateCatway";
import AuthentificationUser from "./pages/authentificationUser";
import AuthentificationAddUser from "./pages/authentificationAddUser";
import AuthentificationCatwaysD from "./pages/authentificationCatwaysD";
import AuthentificationReservation from "./pages/authentificationReservation";

function App() {
  return (
    <div>
      <main>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Dashboard" element={<Dashboard/>}/>
          <Route path="/Inscription" element={<Inscription/>}/>
          <Route path="/Documentation" element={<Documentation/>}/>
          <Route path="/Catways" element={<Catways/>}/>
          <Route path="/Reservations" element={<Reservations/>}/>
          <Route path="/AddUser" element={<AddUser/>}/>
          <Route path="/UpdateUser" element={<UpdateUser/>}/>
          <Route path="/UpdateCatway" element={<UpdateCatway/>}/>
          <Route path="/AuthentificationUser" element={<AuthentificationUser/>}/>
          <Route path="/AuthentificationAddUser" element={<AuthentificationAddUser/>}/>
          <Route path="/AuthentificationCatwaysD" element={<AuthentificationCatwaysD/>}/>
          <Route path="/AuthentificationReservation" element={<AuthentificationReservation/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
