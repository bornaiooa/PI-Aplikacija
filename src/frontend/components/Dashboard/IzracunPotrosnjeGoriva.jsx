import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export const IzracunPotrosnjeGoriva = () => {
    const [kolicinaGoriva, setKolicinaGoriva] = useState('');
    const [potrosnjaAuta, setpotrosnjaAuta] = useState('');
    const [izracun, setIzracun] = useState('');
    const location = useLocation();
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        const litaraGoriva = parseFloat(kolicinaGoriva);
        const prosjecnapotrosnjaAuta = parseFloat(potrosnjaAuta);
    
        // Provjeri jesu li unesene vrijednosti valjani brojevi
        if (isNaN(litaraGoriva) || isNaN(prosjecnapotrosnjaAuta)) {
          return;
        }
    
        const prelazakKilometara = litaraGoriva / (prosjecnapotrosnjaAuta / 100);
        setIzracun(`Za natočeno gorivo prijeći ćeš: ${prelazakKilometara.toFixed(2)} km.`);
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
                <h2 className="header">Izračunavanje potrošnje goriva</h2>
                <form className="putovanje-form" onSubmit={handleSubmit}>


                    <label htmlFor="KolicinaGoriva">Unesite količinu natočenog goriva u (litrama)</label>
                    <input
                        value={kolicinaGoriva}
                        name="KolicinaGoriva"
                        onChange={(e) => setKolicinaGoriva(e.target.value)}
                        id="KolicinaGoriva" />

                    <label htmlFor="CijenaGoriva">Unesite prosječnu potrošnju goriva (Litara/100km)</label>
                    <input
                        value={potrosnjaAuta}
                        name="potrosnjaAuta"
                        onChange={(e) => setpotrosnjaAuta(e.target.value)}
                        id="potrosnjaAutaa" />

                    
                    

                    <button className="gumb" type="submit">Izračunaj koliko ćete potrošiti goriva i koliko će te koštati</button>
                </form>
                <div>
                    <label htmlFor="izracun">Izračun potrošnje:</label>
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