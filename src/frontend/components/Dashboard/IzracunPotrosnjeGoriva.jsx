import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export const IzracunPotrosnjeGoriva = () => {
    const [kolicinaGoriva, setKolicinaGoriva] = useState('');
    const [cijenaGoriva, setCijenaGoriva] = useState('');
    const [brojKilometara, setBrojKilometara] = useState('');
    const [izracun, setIzracun] = useState('');
    const location = useLocation();
    const navigate=useNavigate();

    
    const handleSubmit = (e) => {
        e.preventDefault();
        const litaraGoriva = parseFloat(kolicinaGoriva);
        const cijena1L = parseFloat(cijenaGoriva);
        const kilometri = parseFloat(brojKilometara);
    
        // Provjeri jesu li unesene vrijednosti valjane brojeve
        if (isNaN(litaraGoriva) || isNaN(cijena1L) || isNaN(kilometri)) {
          return;
        }
    
        const potrosnjaLkm = (litaraGoriva / (kilometri / 100)).toFixed(2);
        const iznosNovca = (litaraGoriva * cijena1L).toFixed(2);
    
        setIzracun(`Vaš automobil troši ${potrosnjaLkm} litara goriva na 100 km. Gorivo će vas koštati ${iznosNovca} kn.`);
      }

      const handleIzracunPotrosnje= () => {
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
                <h2 className="header">Izračunavanje potrošnje goriva</h2>
                <form className="putovanje-form" onSubmit={handleSubmit}>
                    

                    <label htmlFor="KolicinaGoriva">Unesite količinu natočenog goriva u (litrama)</label>
                    <input
                        value={kolicinaGoriva}
                        name="KolicinaGoriva"
                        onChange={(e) => setKolicinaGoriva(e.target.value)}
                        id="KolicinaGoriva" />

                    <label htmlFor="CijenaGoriva">Unesite cijenu goriva (u kunama/Litri)</label>
                    <input
                        value={cijenaGoriva}
                        name="CijenaGoriva"
                        onChange={(e) => setCijenaGoriva(e.target.value)}
                        id="CijenaGoriva" />

                    <label htmlFor="BrojKilometara">Unesite koliko ste kilometražu (koliki put ćete prijeći)</label>
                    <input
                        value={brojKilometara}
                        onChange={(e) => setBrojKilometara(e.target.value)}
                        
                        id="BrojKilometara"
                        name="BrojKilometara" />

                

                    <button className="gumb" type="submit">Izračunaj koliko ćeš potrošiti goriva i koliko ćete koštati</button>
                </form>
                <div>
                    <label htmlFor="izracun">Izračun potrošnje:</label>
                    <input className="polje"
                        value ={izracun}
                        readOnly
                        id="izracun"
                        name="izracun" />
                </div>

                <button className="gumb" onClick={handleIzracunPotrosnje}>Povratak na stranicu Kalkulator</button>
            </div>
        </div>
    )
}