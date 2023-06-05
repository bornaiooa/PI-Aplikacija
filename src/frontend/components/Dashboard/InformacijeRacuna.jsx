import React, { useState, useEffect } from "react"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faEye } from "@fortawesome/free-solid-svg-icons"; 
import axios from "axios"; 

export const InformacijeRacuna = (props) => {
    const [email, setEmail] = useState(''); // Korištenje useState kuke za praćenje unosa e-pošte
    const [showPassword, setShowPassword] = useState(false); // Korištenje useState kuke za praćenje stanja prikazivanja/skrivanja lozinke
    const [name, setName] = useState(''); // Korištenje useState kuke za praćenje unosa imena
    const [lastname, setLastname] = useState(''); // Korištenje useState kuke za praćenje unosa prezimena
    const [username, setUsername] = useState(''); // Korištenje useState kuke za praćenje unosa korisničkog imena
    const [password, setPassword] = useState(''); // Korištenje useState kuke za praćenje unosa lozinke
    const [isEditing, setIsEditing] = useState(false); // Korištenje useState kuke za praćenje stanja uređivanja informacija

    useEffect(() => {
        // Dohvaćanje informacija o računu korisnika prilikom učitavanja komponente
        axios.get("http://localhost:3001/racun", { params: { idKorisnika: props.idKorisnika } })
            .then((response) => {
                const { Ime_korisnika, Prezime_korisnika, Email_korisnika, Korisnicko_ime, Lozinka } = response.data;
                setEmail(Email_korisnika);
                setName(Ime_korisnika);
                setLastname(Prezime_korisnika);
                setUsername(Korisnicko_ime);
                setPassword(Lozinka);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [props.idKorisnika]);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword); // Funkcija za promjenu stanja prikazivanja/skrivanja lozinke
    };

    const handleEditClick = () => {
        setIsEditing(true); // Omogućavanje uređivanja informacija
    };

    const handleSaveClick = () => {
        setIsEditing(false); // Završetak uređivanja informacija

        // Ažuriranje informacija o računu korisnika
        axios.post("http://localhost:3001/azurirajRacun", {
            idKorisnika: props.idKorisnika,
            name: name,
            lastname: lastname,
            email: email,
            username: username,
            password: password
        }).then((response) => {
            console.log(response.data);
        }).catch((error) => {
            console.error(error);
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'name':
                setName(value); // Ažuriranje unosa imena
                break;
            case 'lastname':
                setLastname(value); // Ažuriranje unosa prezimena
                break;
            case 'email':
                setEmail(value); // Ažuriranje unosa e-pošte
                break;
            case 'username':
                setUsername(value); // Ažuriranje unosa korisničkog imena
                break;
            case 'password':
                setPassword(value); // Ažuriranje unosa lozinke
                break;
            default:
                break;
        }
    };

    return (
        <div className="auth-form-container">
            <h2 className="header">Prikaz informacija o računu</h2>
            <form className="register-form">
                <label htmlFor="name">Ime</label>
                <input
                    name="name"
                    value={name}
                    readOnly={!isEditing} // Onemogućavanje uređivanja ako nije uključen način uređivanja
                    onChange={handleInputChange}
                    id="name"
                />
                <label htmlFor="lastname">Prezime</label>
                <input
                    name="lastname"
                    value={lastname}
                    readOnly={!isEditing} // Onemogućavanje uređivanja ako nije uključen način uređivanja
                    onChange={handleInputChange}
                    id="lastname"
                />
                <label htmlFor="email">Email</label>
                <input
                    name="email"
                    value={email}
                    readOnly={!isEditing} // Onemogućavanje uređivanja ako nije uključen način uređivanja
                    type="email"
                    id="email"
                    onChange={handleInputChange}
                />
                <label htmlFor="username">Korisničko ime</label>
                <input
                    name="username"
                    value={username}
                    readOnly={!isEditing} // Onemogućavanje uređivanja ako nije uključen način uređivanja
                    type="text"
                    id="username"
                    onChange={handleInputChange}
                />
                <label htmlFor="password">Lozinka</label>
                <div className="password-container">
                    <input
                        name="password"
                        value={password}
                        readOnly={!isEditing && !showPassword} // Onemogućavanje uređivanja ako nije uključen način uređivanja ili prikazivanje lozinke
                        type={showPassword ? "text" : "password"}
                        id="password"
                        placeholder="********"
                        onChange={handleInputChange}
                    />
                    <div
                        className={`eye-icon ${showPassword ? "visible" : ""}`}
                        onClick={togglePasswordVisibility}
                    >
                        <FontAwesomeIcon icon={faEye} /> 
                    </div>
                </div>
            </form>
            {isEditing ? (
                <div>

                    <button className="gumb" onClick={() => setIsEditing(false)}>
                        Odustani od uređivanja
                    </button>
                    <br />
                    <button className="gumb" onClick={handleSaveClick}>
                        Spremi informacije
                    </button>
                </div>
            ) : (
                <button className="gumb" onClick={handleEditClick}>
                    Uredi informacije
                </button>
            )}
        </div>
    );
};