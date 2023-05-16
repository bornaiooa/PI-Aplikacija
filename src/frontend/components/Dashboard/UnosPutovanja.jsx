import React, { useState } from "react";

export const UnosPutovanja = () => {
    const [mjestoPolaska, setMjestoPolaska] = useState('');
    const [mjestoDolaska, setMjestoDolaska] = useState('');
    const [vrstaVozila, setVrstaVozila] = useState('');
    const [datumPutovanja, setDatumPutovanja] = useState('');
    const [trosak, setTrosak] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // logika za izračun troška puta
        setTrosak("100 kn"); // primjer
    }

    return (
        <div className="putovanje-form-container">
            <h2 className="header">Unos putovanja</h2>
            <form className="putovanje-form" onSubmit={handleSubmit}>
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

                <label htmlFor="datumPutovanja">Odaberite datum putovanja</label>
                <input
                    value={datumPutovanja}
                    onChange={(e) => setDatumPutovanja(e.target.value)}
                    type="date"
                    id="datumPutovanja"
                    name="datumPutovanja" />

                <button className="gumb" type="submit">Izračunaj trošak</button>
            </form>
            <div>
                <label htmlFor="trosak">Trošak puta:</label>
                <input
                    value={trosak}
                    readOnly
                    id="trosak"
                    name="trosak" />
            </div>
        </div>
    )
}