import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './frontend/css/App.css';
import { Homepage } from "./frontend/components/Dashboard/Homepage"
import { Login } from "./frontend/components/Auth/Login";
import { Registracija } from "./frontend/components/Auth/Registracija";
import { UnosPutovanja } from "./frontend/components/Dashboard/UnosPutovanja";
import { ListaPutovanja } from "./frontend/components/Dashboard/ListaPutovanja";
import { InformacijeRacuna } from "./frontend/components/Dashboard/InformacijeRacuna";

function App() {
  const [currentForm, setCurrentForm] = useState('login');
  const [idKorisnika, setIdKorisnika] = useState(null); // Varijabla stanja za pohranu ID korisnika

  // Funkcija za prebacivanje između različitih obrazaca (prijava i registracija)
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  // Funkcija za obradu prijave korisnika i postavljanje ID-a korisnika
  const handleLogin = (id) => {
    setIdKorisnika(id);
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/prijava" element={<Login onLogin={handleLogin} />} /> {/* Proslijedite handleLogin kao prop */}
          <Route path="/registracija" element={<Registracija />} />
          <Route path="/unosPutovanja" element={<UnosPutovanja />} />
          <Route path="/listaPutovanja" element={<ListaPutovanja />} />
          <Route
            path="/informacijeRacuna"
            element={<InformacijeRacuna idKorisnika={idKorisnika} />} /> {/* Proslijedite idKorisnika kao prop */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;