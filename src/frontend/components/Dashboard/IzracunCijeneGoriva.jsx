import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export const IzracunCijeneGoriva = () => {
    const [kilometri, setKilometri] = useState('');
    const [cijenaGoriva, setCijenaGoriva] = useState('');
    const [potrosnjaAuta, setPotrosnjaAuta] = useState('');
    const [izracun, setIzracun] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const km = parseFloat(kilometri);
        const cijena1L = parseFloat(cijenaGoriva);
        const potrosnjaLkm = parseFloat(potrosnjaAuta);

        // Provjeri jesu li unesene vrijednosti valjane brojeve
        if (isNaN(km) || isNaN(cijena1L) || isNaN(potrosnjaLkm)) {
            return;
        }

        const brojLitara = (potrosnjaLkm * km / 100).toFixed(2); //formula za izracun litara goriva koje smo natočili
        const iznosNovca = (brojLitara * cijena1L).toFixed(2); // iznos novaca koji moramo platiti za svoj put

        setIzracun(`Za put od ${kilometri} km, potrošiti ćete ${brojLitara} litara goriva, što ćete platiti ${iznosNovca} eura.`);
    }

    const handleIzracunPotrosnje = () => {
        navigate('/izracunPotrosnje');
    }

    return (
        <div>
            <nav className="navigation-bar">
                <div className="nav-left">
                    <Link
                        to="/unosPutovanja"
                        className={location.pathname === "/unosPutovanja" ? "active" : ""}
                    >
                        Unos putovanja
                    </Link>

                    <Link
                        to="/izracunPotrosnje"
                        className={location.pathname === "/izracunPotrosnje" ? "active" : ""}
                    >
                        Kalkulator
                    </Link>

                    <Link
                        to="/listaPutovanja"
                        className={location.pathname === "/listaPutovanja" ? "active" : ""}
                    >
                        Pregled putovanja
                    </Link>
                    <Link
                        to="/informacijeRacuna"
                        className={location.pathname === "/informacijeRacuna" ? "active" : ""}
                    >
                        Informacije o računu
                    </Link>
                </div>
                <div className="nav-right">
                    <Link to="/">Odjava</Link>
                </div>
            </nav>
            <div className="putovanje-form-container">
                <h2 className="header">Izračunavanje cijene goriva</h2>
                <form className="putovanje-form" onSubmit={handleSubmit}>

                    <label htmlFor="Kilometri">Unesite prijeđeni put u kilometrima</label>
                    <input
                        value={kilometri}
                        name="Kilometri"
                        onChange={(e) => setKilometri(e.target.value)}
                        id="Kilometri" />

                    <label htmlFor="CijenaGoriva">Unesite cijenu goriva (u eurima/litri)</label>
                    <input
                        value={cijenaGoriva}
                        name="cijenaGoriva"
                        onChange={(e) => setCijenaGoriva(e.target.value)}
                        id="cijenaGoriva" />

                    <label htmlFor="potrosnjaAuta">Unesite prosječnu potrošnju auta na 100km</label>
                    <input
                        value={potrosnjaAuta}
                        onChange={(e) => setPotrosnjaAuta(e.target.value)}
                        type="number"
                        id="PotrosnjaAuta"
                        name="PotrosnjaAuta" />



                    <button className="gumb" type="submit">Izračunaj koliko ćeš platiti gorivo za svoj put</button>
                </form>
                <div>
                    <label htmlFor="izracun">Izračun (EUR)</label>
                    <input className="polje"
                        value={izracun}
                        readOnly
                        id="izracun"
                        name="izracun" />
                </div>
                <button className="gumb" onClick={handleIzracunPotrosnje}>Povratak na stranicu Kalkulator</button>
            </div>
        </div>
    )
}