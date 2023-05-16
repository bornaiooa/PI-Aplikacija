import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

export const Login = (props) => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

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
                <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    type="username"
                    id="username"
                    name="username" />

                <label htmlFor="password">Unesite lozinku</label>
                <div className="password-container">
                    <input
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                    />
                    <div
                        className={`eye-icon ${showPassword ? "visible" : ""}`}
                        onClick={togglePasswordVisibility}
                    >
                        <FontAwesomeIcon icon={faEye} />
                    </div>
                </div>

                <button className="gumb" type="submit">Prijavi se</button>
            </form>
            <button className="link-btn" onClick={handleRegistracija}>Ukoliko nemate račun, registrirajte se.</button>
        </div>
    )
}