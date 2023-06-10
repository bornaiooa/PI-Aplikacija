import React, { useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";

export const ListaPutovanja = () => {
  const [putovanja, setPutovanja] = useState([]);
  const location = useLocation();

  const dohvatiPutovanja = () => {
    // Dohvaćanje prošlih putovanja iz liste putovanja
    axios.get("http://localhost:3001/listaPutovanja")
      .then((response) => {
        if (Array.isArray(response.data)) {
          setPutovanja(response.data); // Postavi dobivena putovanja u state
        } else {
          console.error(response.data); // Ispiši grešku ako podaci nisu u očekivanom formatu
        }
      })
      .catch((error) => {
        console.error(error); // Ispiši grešku ako dođe do problema prilikom dohvata putovanja
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
              <th>Trošak (€)</th>
            </tr>
          </thead>
          <tbody>
            {putovanja.map((putovanje) => (
              <tr key={putovanje.ID_putovanja}>
                <td>{formatirajDatum(putovanje.Datum_putovanja)}</td>
                <td>{putovanje.Mjesto_polaska}</td>
                <td>{putovanje.Mjesto_dolaska}</td>
                <td>{putovanje.ID_vozila}</td>
                <td>{putovanje.Prosjecna_potrosnja}</td>
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