import {Routes,Route } from "react-router-dom/dist";
import Home from './pages/home';
import Inscription from "./pages/inscription";
import Dashboard from "./pages/dashboard";
import Documentation from "./pages/documentation";
import Catways from "./pages/catways";
import Cataway from "./pages/catway";
import Reservations from "./pages/reservation";
import Reservation from "./pages/reservation";
import AddUser from "./pages/addUser";
import UpdateUser from "./pages/updateUser";
import UpdateCatway from "./pages/updateCatway";
import AddCatway from "./pages/addCatway";
import AddReservation from "./pages/addReservation";

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
          <Route path="/Cataway" element={<Cataway/>}/>
          <Route path="/Reservations" element={<Reservations/>}/>
          <Route path="/Reservation" element={<Reservation/>}/>
          <Route path="/AddUser" element={<AddUser/>}/>
          <Route path="/UpdateUser" element={<UpdateUser/>}/>
          <Route path="/UpdateCatway" element={<UpdateCatway/>}/>
          <Route path="/AddCatway" element={<AddCatway/>}/>
          <Route path="/AddReservation" element={<AddReservation/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
