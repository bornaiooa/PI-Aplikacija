import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './frontend/css/App.css';
import { Homepage } from "./frontend/components/Dashboard/Homepage"
import { Login } from "./frontend/components/Auth/Login";
import { Registracija } from "./frontend/components/Auth/Registracija";
import { UnosPutovanja } from "./frontend/components/Dashboard/UnosPutovanja";
import { ListaPutovanja } from "./frontend/components/Dashboard/ListaPutovanja";
import { InformacijeRacuna } from "./frontend/components/Dashboard/InformacijeRacuna";

export const UserContext = React.createContext(); // Kreiranje konteksta

function App() {
  const [idKorisnika, setIdKorisnika] = useState(null); // Dodavanje idKorisnika kao stanje

  const handleLogin = (id) => {
    setIdKorisnika(id); // Pohrana ID-a korisnika
  };

  const handleLogout = () => {
    setIdKorisnika(null); // Postavljanje ID-a korisnika na null prilikom odjave
  };

  return (
    <div className="App">
      <UserContext.Provider value={{ idKorisnika, handleLogin, handleLogout }}>
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/prijava" element={<Login handleLogin={handleLogin} />} /> {/* Proslijedite handleLogin kao prop */}
            <Route path="/registracija" element={<Registracija />} />
            <Route path="/unosPutovanja" element={<UnosPutovanja />} />
            <Route path="/listaPutovanja" element={<ListaPutovanja />} />
            <Route
              path="/informacijeRacuna"
              element={<InformacijeRacuna />} /> {/* Proslijedite idKorisnika kao prop */}
          </Routes>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
