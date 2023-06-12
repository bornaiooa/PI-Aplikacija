import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export const IzracunKilometara = () => {
    const [kolicinaGoriva, setKolicinaGoriva] = useState('');
    const [cijenaGoriva, setCijenaGoriva] = useState('');
    const [potrosnjaAuta, setPotrosnjaAuta] = useState('');
    const [izracun, setIzracun] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const placenoGorivo = parseFloat(kolicinaGoriva);
        const cijena1L = parseFloat(cijenaGoriva);
        const potrosnjaLkm = parseFloat(potrosnjaAuta);

        // Provjeri jesu li unesene vrijednosti valjane brojeve
        if (isNaN(placenoGorivo) || isNaN(cijena1L) || isNaN(potrosnjaLkm)) {
            return;
        }

        const kilometri = (placenoGorivo / (potrosnjaLkm / 10)).toFixed(2);
        const brojLitara = (placenoGorivo / cijena1L).toFixed(2);


        setIzracun(`Možete prijeći ${kilometri} km za ${brojLitara} natočenih litara!`);
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
                <h2 className="header">Izračunavanje kilometara koji će se prijeći</h2>
                <form className="putovanje-form" onSubmit={handleSubmit}>


                    <label htmlFor="KolicinaGoriva">Unesite količinu natočenog goriva (u eurima)</label>
                    <input
                        value={kolicinaGoriva}
                        name="KolicinaGoriva"
                        onChange={(e) => setKolicinaGoriva(e.target.value)}
                        id="KolicinaGoriva" />

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



                    <button className="gumb" type="submit">Izračunaj koliko ćeš kilometara prijeći</button>
                </form>
                <div>
                    <label htmlFor="izracun">Izračun (km):</label>
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