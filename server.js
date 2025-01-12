const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import CORS

const app = express();
const port = 3333;

app.use(bodyParser.json());

// Dodaj middleware CORS
app.use(cors());

// Konfiguracja bazy danych
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "uniterms",
});

db.connect((err) => {
  if (err) {
    console.error("Błąd połączenia z bazą danych:", err);
    return;
  }
  console.log("Połączono z bazą danych.");
});

// Endpoint do dodawania rekordów
app.post("/uniterms", (req, res) => {
  const { expressionA, expressionB, operationSequence, change, fontSize } =
    req.body;

  if (
    !expressionA ||
    !expressionB ||
    !operationSequence ||
    !change ||
    !fontSize
  ) {
    return res.status(400).json({ message: "Brak wymaganych pól." });
  }

  const query = `INSERT INTO uniterms (expressionA, expressionB, operationSequence, changeDescription, fontSize) VALUES (?, ?, ?, ?, ?)`;
  db.query(
    query,
    [expressionA, expressionB, operationSequence, change, fontSize],
    (err, result) => {
      if (err) {
        console.error("Błąd podczas dodawania rekordu:", err);
        return res.status(500).json({ message: "Błąd serwera." });
      }
      res
        .status(201)
        .json({ message: "Uniterm zapisany.", id: result.insertId });
    }
  );
});

// Endpoint do pobierania rekordów
app.get("/uniterms", (req, res) => {
  const query = "SELECT * FROM uniterms";
  db.query(query, (err, results) => {
    if (err) {
      console.error("Błąd podczas odczytu rekordów:", err);
      return res.status(500).json({ message: "Błąd serwera." });
    }
    res.status(200).json(results);
  });
});

// Start serwera
app.listen(port, () => {
  console.log(`Serwer działa na http://localhost:${port}`);
});
