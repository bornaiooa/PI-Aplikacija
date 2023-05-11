import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './frontend/css/App.css';
import { Homepage } from "./frontend/components/Dashboard/Homepage"
import { Login } from "./frontend/components/Auth/Login";
import { Registracija } from "./frontend/components/Auth/Registracija";
import { UnosPutovanja } from "./frontend/components/Dashboard/UnosPutovanja";

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/prijava" element={<Login />} />
          <Route path="/registracija" element={<Registracija />} />
          <Route path="/unosPutovanja" element={<UnosPutovanja />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;