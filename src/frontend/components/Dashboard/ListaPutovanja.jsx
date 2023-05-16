import React, { useState } from "react";

export const ListaPutovanja = () => {
  const [putovanja, setPutovanja] = useState([]);

  const dohvatiPutovanja = () => {
    // logika za dohvaćanje prošlih putovanja
    const prethodnaPutovanja = [
      {
        putovanje: "Mjesto A - Mjesto B",
        datumPutovanja: "2023-05-15",
        vrstaVozila: "Automobil",
        trosak: "100 kn"
      },
      {
        putovanje: "Mjesto C - Mjesto D",
        datumPutovanja: "2023-05-10",
        vrstaVozila: "Autobus",
        trosak: "50 kn"
      }
    ];
    setPutovanja(prethodnaPutovanja);
  }

  return (
    <div className="pregled-putovanja-container">
      <h2 className="header">Pregled putovanja</h2>
      <table className="putovanja-table">
        <thead>
          <tr>
            <th>Putovanje</th>
            <th>Datum putovanja</th>
            <th>Vrsta vozila</th>
            <th>Trošak</th>
          </tr>
        </thead>
        <tbody>
          {putovanja.map((putovanje, index) => (
            <tr key={index}>
              <td>{putovanje.putovanje}</td>
              <td>{putovanje.datumPutovanja}</td>
              <td>{putovanje.vrstaVozila}</td>
              <td>{putovanje.trosak}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="gumb" onClick={dohvatiPutovanja}>Dohvati prošla putovanja</button>
    </div>
  )
}