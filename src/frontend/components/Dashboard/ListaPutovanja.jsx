import React, { useState } from "react";
import axios from "axios";

export const ListaPutovanja = () => {
  const [putovanja, setPutovanja] = useState([]);

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

  return (
    <div className="pregled-putovanja-container">
      <h2 className="header">Pregled putovanja</h2>
      <table className="putovanja-table">
        <thead>
          <tr>
            <th>Datum putovanja</th>
            <th>Mjesto polaska</th>
            <th>Mjesto dolaska</th>
            <th>Vrsta vozila</th>
            <th>Trošak</th>
          </tr>
        </thead>
        <tbody>
          {putovanja.map((putovanje) => (
            <tr key={putovanje.ID_putovanja}>
              <td>{putovanje.Datum_putovanja}</td>
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
  );
};