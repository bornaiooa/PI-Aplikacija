import React, { useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Axios from 'axios';
import { UserContext } from "../../../App";

export const UnosPutovanja = () => {
    const [mjestoPolaska, setMjestoPolaska] = useState('');
    const [mjestoDolaska, setMjestoDolaska] = useState('');
    const [datumPutovanja, setDatumPutovanja] = useState('');
    const [brojKilometara, setBrojKilometara] = useState('');
    const [potrosnjaGoriva, setPotrosnjaGoriva] = useState('');
    const [idVozila, setIdVozila] = useState('');
    const location = useLocation();
    const { idKorisnika } = useContext(UserContext); // Dohvati idKorisnika iz konteksta

    const unesiPutovanje = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:3001/unosPutovanja', {
            mjestoPolaska: mjestoPolaska,
            mjestoDolaska: mjestoDolaska,
            datumPutovanja: datumPutovanja,
            brojKilometara: brojKilometara,
            potrosnjaGoriva: potrosnjaGoriva,
            idVozila: idVozila,
            idKorisnika: idKorisnika, // Dodaj idKorisnika u zahtjev
        })
            .then((response) => {
                if (response.data.message) {
                    console.log(response.data);
                } else {
                    console.log(response.data);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <div>
            <nav className="navigation-bar">
                <div className="nav-left">
                    <Link
                        to="/unosPutovanja"
                        className={location.pathname === '/unosPutovanja' ? 'active' : ''}
                    >
                        Unos putovanja
                    </Link>

                    <Link
                        to="/izracunPotrosnje"
                        className={location.pathname === '/izracunPotrosnje' ? 'active' : ''}
                    >
                        Kalkulator
                    </Link>

                    <Link
                        to="/listaPutovanja"
                        className={location.pathname === '/listaPutovanja' ? 'active' : ''}
                    >
                        Lista putovanja
                    </Link>
                    <Link
                        to="/informacijeRacuna"
                        className={location.pathname === '/informacijeRacuna' ? 'active' : ''}
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
                <form className="putovanje-form" onSubmit={unesiPutovanje}>
                    <label htmlFor="datumPutovanja">Odaberite datum putovanja</label>
                    <input
                        value={datumPutovanja}
                        onChange={(e) => setDatumPutovanja(e.target.value)}
                        type="date"
                        id="datumPutovanja"
                        name="datumPutovanja"
                    />

                    <label htmlFor="mjestoPolaska">Unesite mjesto polaska</label>
                    <input
                        value={mjestoPolaska}
                        name="mjestoPolaska"
                        onChange={(e) => setMjestoPolaska(e.target.value)}
                        id="mjestoPolaska"
                    />

                    <label htmlFor="mjestoDolaska">Unesite mjesto dolaska</label>
                    <input
                        value={mjestoDolaska}
                        name="mjestoDolaska"
                        onChange={(e) => setMjestoDolaska(e.target.value)}
                        id="mjestoDolaska"
                    />

                    <label htmlFor="idVozila">Unesite ID vozila (1 - automobil, 2 - motocikl)</label>
                    <input
                        value={idVozila}
                        onChange={(e) => setIdVozila(e.target.value)}
                        type="number"
                        id="idVozila"
                        name="idVozila"
                    />

                    <label htmlFor="brojKilometara">Unesite broj kilometara</label>
                    <input
                        value={brojKilometara}
                        onChange={(e) => setBrojKilometara(e.target.value)}
                        type="number"
                        id="brojKilometara"
                        name="brojKilometara"
                    />

                    <label htmlFor="potrosnjaGoriva">Unesite potrošnju za gorivo (u eurima)</label>
                    <input
                        value={potrosnjaGoriva}
                        onChange={(e) => setPotrosnjaGoriva(e.target.value)}
                        type="number"
                        id="potrosnjaGoriva"
                        name="potrosnjaGoriva"
                    />

                    <button className="gumb" type="submit" onSubmit={unesiPutovanje}>
                        Spremi putovanje
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UnosPutovanja;