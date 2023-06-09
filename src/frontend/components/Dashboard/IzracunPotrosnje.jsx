import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link, useLocation } from "react-router-dom";

export const IzracunPotrosnje = (props) => {
   const navigate = useNavigate();
   const location = useLocation();

    const handleIzracunPrelaskaKilometrimaPoNovcima = () => {
        navigate('/izracunKilometara');
    }

    const handleIzracunCijeneGoriva= () => {
        navigate('/izracunCijeneGoriva');
    }

    const handleIzracunPotrosnjeGoriva= () => {
        navigate('/izracunPotrosnjeGoriva');
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
            className={location.pathname === "/informacijeRacuna" ? "active" : ""}>
            Informacije o računu
          </Link>
        </div>

        <div className="nav-right">
          <Link to="/prijava">Odjava</Link>
        </div>
      </nav>

        <div>
            <h1>KALKULATORI</h1>

            <button className="gumb" onClick={handleIzracunPrelaskaKilometrimaPoNovcima}>Izračun prijeđenih kilometara</button>
            <br />
            <button className="gumb" onClick={handleIzracunCijeneGoriva}>Izračun cijene goriva za određenu kilometražu</button>
            <br />
            <button className="gumb" onClick={handleIzracunPotrosnjeGoriva}>Izračun potrošnje goriva</button>

        </div>

        </div>
    );
}