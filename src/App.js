import React, { useState } from "react";
import './frontend/css/App.css';
import { Login } from "./frontend/components/Auth/Login";
import { Registracija } from "./frontend/components/Auth/Registracija";

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Registracija onFormSwitch={toggleForm} />
      }
    </div>
  );
}

export default App;