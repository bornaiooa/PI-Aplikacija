import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

export const Registracija = (props) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [username, setUsername] = useState('');

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
                <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" />
                <label htmlFor="lastname">Unesite svoje prezime</label>
                <input value={lastname} name="lastname" onChange={(e) => setLastname(e.target.value)} id="lastname" />
                <label htmlFor="email">Unesite svoj email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" />
                <label htmlFor="username">Unesite svoje korisničko ime</label>
                <input value={username} onChange={(e) => setUsername(e.target.value)} type="username" id="username" name="username" />
                <label htmlFor="password">Unesite svoju lozinku</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" id="password" placeholder="********" name="password" />
                <button className="gumb" type="submit">Registriraj se</button>
            </form>
            {<button className="link-btn" onClick={handlePrijava}>Već imate račun? Prijavite se ovdje.</button>}
        </div>
    )
}