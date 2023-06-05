import React, { useState } from "react"; 
import { useNavigate } from 'react-router-dom'; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faEye } from "@fortawesome/free-solid-svg-icons"; 
import Axios from "axios"; 

export const Registracija = (props) => {
    const navigate = useNavigate(); // Korištenje useNavigate kuke za navigaciju
    const [showPassword, setShowPassword] = useState(false); // Korištenje useState kuke za praćenje stanja prikazivanja/skrivanja lozinke
    const [email, setEmail] = useState(''); // Korištenje useState kuke za praćenje unosa e-pošte
    const [pass, setPass] = useState(''); // Korištenje useState kuke za praćenje unosa lozinke
    const [name, setName] = useState(''); // Korištenje useState kuke za praćenje unosa imena
    const [lastname, setLastname] = useState(''); // Korištenje useState kuke za praćenje unosa prezimena
    const [username, setUsername] = useState(''); // Korištenje useState kuke za praćenje unosa korisničkog imena
    const [registerStatus, setRegisterStatus] = useState(""); // Korištenje useState kuke za praćenje statusa registracije
    
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword); // Funkcija za promjenu stanja prikazivanja/skrivanja lozinke
    };

    const register = (e) => {
        e.preventDefault(); // Sprječavanje podrazumijevane radnje obrasca registracije
        Axios.post("http://localhost:3001/registracija", { // Slanje POST zahtjeva na određeni URL
            name: name, // Slanje unesenog imena
            lastname: lastname, // Slanje unesenog prezimena
            email: email, // Slanje unesene e-pošte
            username: username, // Slanje unesenog korisničkog imena
            password: pass, // Slanje unesene lozinke
        }).then((response) => {

            if (response.data.message) { // Provjera odgovora od poslužitelja na temelju poruke
                setRegisterStatus(response.data.message); // Ažuriranje statusa registracije s porukom odgovora
            } else {
                setRegisterStatus("Uspješno kreiran račun."); // Ažuriranje statusa registracije s porukom o uspješnoj registraciji
                navigate('/prijava'); // Navigacija na "/prijava" rutu
            }
        })
    }

    const handlePrijava = () => {
        navigate('/prijava'); // Navigacija na "/prijava" rutu
    }

    return (
        <div className="auth-form-container">
            <h2 className="header">Registracija</h2>
            <form className="register-form" onSubmit={register}>
                <label htmlFor="name">Unesite svoje ime</label>
                <input
                    value={name}
                    name="name"
                    onChange={(e) => setName(e.target.value)} // Praćenje promjena unosa imena
                    id="name"
                />

                <label htmlFor="lastname">Unesite svoje prezime</label>
                <input
                    value={lastname}
                    name="lastname"
                    onChange={(e) => setLastname(e.target.value)} // Praćenje promjena unosa prezimena
                    id="lastname"
                />

                <label htmlFor="email">Unesite svoj email</label>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} // Praćenje promjena unosa e-pošte
                    type="email"
                    id="email"
                    name="email"
                />

                <label htmlFor="username">Unesite svoje korisničko ime</label>
                <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} // Praćenje promjena unosa korisničkog imena
                    type="username"
                    id="username"
                    name="username" />

                <label htmlFor="password">Unesite svoju lozinku</label>
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

                <button className="gumb" type="submit" onClick={register}>Registriraj se</button> 
                <h1 style={{ color: 'red', fontSize: '15px', textAlign: 'center', marginTop: '20px' }}>{registerStatus}</h1> 
            </form>
            {<button className="link-btn" onClick={handlePrijava}>Već imate račun? Prijavite se ovdje.</button>} 
        </div>
    )
}