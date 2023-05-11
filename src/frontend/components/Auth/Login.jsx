import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

export const Login = (props) => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username);
    }

    const handleRegistracija = () => {
        navigate('/registracija');
    }

    return (
        <div className="auth-form-container">
            <h2>Prijava</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="username">Unesite korisničko ime</label>
                <input value={username} onChange={(e) => setUsername(e.target.value)} type="username" id="username" name="username" />
                <label htmlFor="password">Unesite lozinku</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button className="gumb" type="submit">Prijavi se</button>
            </form>
            <button className="link-btn" onClick={handleRegistracija}>Ukoliko nemate račun, registrirajte se.</button>
        </div>
    )
}