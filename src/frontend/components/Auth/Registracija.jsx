import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

export const Registracija = (props) => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [username, setUsername] = useState('');

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    const handlePrijava = () => {
        navigate('/prijava');
    }

    return (
        <div className="auth-form-container">
            <h2 className="header">Registracija</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Unesite svoje ime</label>
                <input
                    value={name}
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    id="name"
                />

                <label htmlFor="lastname">Unesite svoje prezime</label>
                <input
                    value={lastname}
                    name="lastname"
                    onChange={(e) => setLastname(e.target.value)}
                    id="lastname"
                />

                <label htmlFor="email">Unesite svoj email</label>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    id="email"
                    name="email"
                />

                <label htmlFor="username">Unesite svoje korisničko ime</label>
                <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    type="username"
                    id="username"
                    name="username" />

                <label htmlFor="password">Unesite svoju lozinku</label>
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

                <button className="gumb" type="submit">Registriraj se</button>
            </form>
            {<button className="link-btn" onClick={handlePrijava}>Već imate račun? Prijavite se ovdje.</button>}
        </div>
    )
}