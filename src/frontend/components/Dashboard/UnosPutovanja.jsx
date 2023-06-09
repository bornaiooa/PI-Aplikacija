import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const UnosPutovanja = () => {
    const [mjestoPolaska, setMjestoPolaska] = useState('');
    const [mjestoDolaska, setMjestoDolaska] = useState('');
    const [vrstaVozila, setVrstaVozila] = useState('');
    const [datumPutovanja, setDatumPutovanja] = useState('');
    const [brojKilometara, setBrojKilometara] = useState('');
    const [prosjecnaPotrosnja, setProsjecnaPotrosnja] = useState('');
    const [trosak, setTrosak] = useState('');
    const location = useLocation();

    const handleSubmit = (e) => {
        e.preventDefault();
        // logika za izračun troška puta
        setTrosak("100 kn"); // primjer
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
            Izračun potrošnje goriva
          </Link>

                    <Link
                        to="/listaPutovanja"
                        className={location.pathname === "/listaPutovanja" ? "active" : ""}
                    >
                        Lista putovanja
                    </Link>
                    <Link
                        to="/informacijeRacuna"
                        className={location.pathname === "/informacijeRacuna" ? "active" : ""}
                    >
                        Informacije o računu
                    </Link>
                </div>
                <div className="nav-right">
                    <Link to="/prijava">Odjava</Link>
                </div>
            </nav>
            <div className="putovanje-form-container">
                <h2 className="header">Unos putovanja</h2>
                <form className="putovanje-form" onSubmit={handleSubmit}>
                    <label htmlFor="datumPutovanja">Odaberite datum putovanja</label>
                    <input
                        value={datumPutovanja}
                        onChange={(e) => setDatumPutovanja(e.target.value)}
                        type="date"
                        id="datumPutovanja"
                        name="datumPutovanja" />

                    <label htmlFor="mjestoPolaska">Unesite mjesto polaska</label>
                    <input
                        value={mjestoPolaska}
                        name="mjestoPolaska"
                        onChange={(e) => setMjestoPolaska(e.target.value)}
                        id="mjestoPolaska" />

                    <label htmlFor="mjestoDolaska">Unesite mjesto dolaska</label>
                    <input
                        value={mjestoDolaska}
                        name="mjestoDolaska"
                        onChange={(e) => setMjestoDolaska(e.target.value)}
                        id="mjestoDolaska" />

                    <label htmlFor="brojKilometara">Unesite broj kilometara</label>
                    <input
                        value={brojKilometara}
                        onChange={(e) => setBrojKilometara(e.target.value)}
                        type="number"
                        id="brojKilometara"
                        name="brojKilometara" />

                    <label htmlFor="vrstaVozila">Odaberite vrstu vozila</label>
                    <select
                        value={vrstaVozila}
                        onChange={(e) => setVrstaVozila(e.target.value)}
                        id="vrstaVozila"
                        name="vrstaVozila">
                        <option value="">Odaberite vrstu vozila</option>
                        <option value="automobil">Automobil</option>
                        <option value="autobus">Motor</option>
                    </select>

                    <label htmlFor="prosjecnaPotrosnja">Unesite prosječnu potrošnju goriva (l/km)</label>
                    <input
                        value={prosjecnaPotrosnja}
                        onChange={(e) => setProsjecnaPotrosnja(e.target.value)}
                        type="number"
                        id="prosjecnaPotrosnja"
                        name="prosjecnaPotrosnja" />

                    <button className="gumb" type="submit">Izračunaj trošak</button>
                </form>
                <div>
                    <label htmlFor="trosak">Trošak puta (€):</label>
                    <input
                        value={trosak}
                        readOnly
                        id="trosak"
                        name="trosak" />
                </div>
            </div>
        </div>
    )
}