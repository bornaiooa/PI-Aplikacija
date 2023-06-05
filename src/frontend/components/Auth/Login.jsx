import React, { useState } from "react"; 
import { useNavigate } from 'react-router-dom'; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faEye } from "@fortawesome/free-solid-svg-icons"; 
import axios from "axios"; // Uvoz Axios biblioteke za izvršavanje HTTP zahtjeva

export const Login = (props) => {
    const navigate = useNavigate(); // Korištenje useNavigate kuke za navigaciju
    const [showPassword, setShowPassword] = useState(false); // Korištenje useState kuke za praćenje stanja prikazivanja/skrivanja lozinke
    const [username, setUsername] = useState(''); // Korištenje useState kuke za praćenje unosa korisničkog imena
    const [pass, setPass] = useState(''); // Korištenje useState kuke za praćenje unosa lozinke
    const [loginStatus, setLoginStatus] = useState(""); // Korištenje useState kuke za praćenje statusa prijave
    
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword); // Funkcija za promjenu stanja prikazivanja/skrivanja lozinke
    };

    const login = (e) => {
        e.preventDefault(); // Sprječavanje podrazumijevane radnje obrasca prijave
        axios.post("http://localhost:3001/prijava", { // Slanje POST zahtjeva na određeni URL
            username: username, // Slanje unesenog korisničkog imena
            password: pass, // Slanje unesene lozinke
        }).then((response) => {
            if (response.data.message) { // Provjera odgovora od poslužitelja na temelju poruke
                setLoginStatus(response.data.message); // Ažuriranje statusa prijave s porukom odgovora
            } else {
                setLoginStatus(response.data[0].email); // Ažuriranje statusa prijave s e-poštom iz odgovora
                navigate('/informacijeRacuna'); // Navigacija na "/informacijeRacuna" rutu
            }
        })
    }

    const handleRegistracija = () => {
        navigate('/registracija'); // Navigacija na "/registracija" rutu
    }

    return (
        <div className="auth-form-container">
            <h2>Prijava</h2>
            <form className="login-form" onSubmit={login}>
                <label htmlFor="username">Unesite korisničko ime</label>
                <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} // Praćenje promjena unosa korisničkog imena
                    type="username"
                    id="username"
                    name="username" />

                <label htmlFor="password">Unesite lozinku</label>
                <div className="password-container">
                    <input
                        value={pass}
                        onChange={(e) => setPass(e.target.value)} // Praćenje promjena unosa lozinke
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                    />
                    <div
                        className={`eye-icon ${showPassword ? "visible" : ""}`}
                        onClick={togglePasswordVisibility} // Omogućavanje klikanja na ikonu za prikazivanje/skrivanje lozinke
                    >
                        <FontAwesomeIcon icon={faEye} /> 
                    </div>
                </div>

                <button className="gumb" type="submit" onClick={login}>Prijavi se</button>
                <h1 style={{ color: 'red', fontSize: '15px', textAlign: 'center', marginTop: '20px' }}>{loginStatus}</h1> 
            </form>
            <button className="link-btn" onClick={handleRegistracija}>Ukoliko nemate račun, registrirajte se.</button> 
        </div>
    )
}