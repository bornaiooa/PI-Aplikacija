const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const dbConfig = mysql.createConnection({
    host: "localhost",
    user: "bcrnkovic",
    password: "11",
    database: "bcrnkovic"
})

dbConfig.connect((err) => {
    if (err) {
      throw err;
    }
    console.log('Connected to the database');
  });


app.post('/registracija', (req, res) => {
    const name=req.body.name
    const lastname=req.body.lastname
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
 
    dbConfig.query("INSERT INTO Korisnik (Ime_korisnika, Prezime_korisnika, Email_korisnika, Korisnicko_ime, Lozinka) VALUES (?, ?, ?, ?, ?)", [name, lastname, email, username, password], 
        (err, result) => {
            if(result){
                res.send(result);
            }else{
                res.send({message: "Krivi unos"})
            }
        }
    )
})

app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    con.query("SELECT * FROM Korisnik WHERE Korisnicko_ime = ? AND Lozinka = ?", [username, password], 
        (err, result) => {
            if(err){
                req.setEncoding({err: err});
            }else{
                if(result.length > 0){
                    res.send(result);
                }else{
                    res.send({message: "Krivo korisnicko ime ili lozinka!"})
                }
            }
        }
    )
})

app.listen(3306, () => {
    console.log("Pokretanje backenda");
})