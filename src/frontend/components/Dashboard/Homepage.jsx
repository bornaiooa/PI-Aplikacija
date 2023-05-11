import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Homepage = (props) => {
    const navigate = useNavigate();

    const handlePrijava = () => {
        navigate('/prijava');
    }

    const handleRegistracija = () => {
        navigate('/registracija');
    }

    return (
        <div>
            <h1>APLIKACIJA ZA IZRAČUN TROŠKOVA PUTOVANJA</h1>

            <button className="gumb" onClick={handlePrijava}>PRIJAVA</button>
            <br />
            <button className="gumb" onClick={handleRegistracija}>REGISTRACIJA</button>
        </div>
    );
}