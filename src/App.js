import React, { useState } from "react";
//import logo from './logo.svg';
import './App.css';
import { Login } from "./Login";
import { Registracija } from "./Registracija";

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