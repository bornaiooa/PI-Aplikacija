import React, { useState, useContext } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import { UserContext } from "../../../App";

export const ListaPutovanja = () => {
  const [putovanja, setPutovanja] = useState([]);
  const location = useLocation();
  const { idKorisnika } = useContext(UserContext); // Dohvati ID prijavljenog korisnika

  const dohvatiPutovanja = () => {
    // Dohvaćanje putovanja samo za prijavljenog korisnika
    axios.get("http://localhost:3001/listaPutovanja", {
      params: { idKorisnika: idKorisnika },
    })
      .then((response) => {
        if (Array.isArray(response.data)) {
          setPutovanja(response.data);
        } else {
          console.error(response.data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const formatirajDatum = (datum) => {
    const opcije = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    };
    return new Date(datum).toLocaleDateString(undefined, opcije);
  };

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

      <div className="pregled-putovanja-container">
        <h2 className="header">Pregled putovanja</h2>
        <table className="putovanja-table">
          <thead>
            <tr>
              <th>Datum putovanja</th>
              <th>Mjesto polaska</th>
              <th>Mjesto dolaska</th>
              <th>Vrsta vozila</th>
              <th>Broj kilometara</th>
              <th>Potrošnja goriva</th>
            </tr>
          </thead>
          <tbody>
            {putovanja.map((putovanje) => (
              <tr key={putovanje.ID_putovanja}>
                <td>{formatirajDatum(putovanje.Datum_putovanja)}</td>
                <td>{putovanje.Mjesto_polaska}</td>
                <td>{putovanje.Mjesto_dolaska}</td>
                <td>{putovanje.ID_vozila}</td>
                <td>{putovanje.Broj_kilometara}</td>
                <td>{putovanje.Potrosnja_goriva}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="gumb" onClick={dohvatiPutovanja}>
          Dohvati prošla putovanja
        </button>
      </div>
    </div>
  );
};