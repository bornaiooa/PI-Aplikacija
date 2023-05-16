import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

export const InformacijeRacuna = (props) => {
    const [email, setEmail] = useState('example@example.com');
    const [showPassword, setShowPassword] = useState(false);
    const [name, setName] = useState('John');
    const [lastname, setLastname] = useState('Doe');
    const [username, setUsername] = useState('johndoe');
    const [password, setPassword] = useState('password');
    const [isEditing, setIsEditing] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        setIsEditing(false);
        // Ovdje možete dodati logiku za spremanje informacija
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'lastname':
                setLastname(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'username':
                setUsername(value);
                break;
            case 'password':
                setPassword(value);
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
                    readOnly={!isEditing}
                    onChange={handleInputChange}
                    id="name"
                />
                <label htmlFor="lastname">Prezime</label>
                <input
                    name="lastname"
                    value={lastname}
                    readOnly={!isEditing}
                    onChange={handleInputChange}
                    id="lastname"
                />
                <label htmlFor="email">Email</label>
                <input
                    name="email"
                    value={email}
                    readOnly={!isEditing}
                    type="email"
                    id="email"
                    onChange={handleInputChange}
                />
                <label htmlFor="username">Korisničko ime</label>
                <input
                    name="username"
                    value={username}
                    readOnly={!isEditing}
                    type="text"
                    id="username"
                    onChange={handleInputChange}
                />
                <label htmlFor="password">Lozinka</label>
                <div className="password-container">
                    <input
                        name="password"
                        value={password}
                        readOnly={!isEditing && !showPassword}
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