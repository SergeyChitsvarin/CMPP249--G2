const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const port = 8000;

var con = mysql.createConnection({
    host: "localhost",
    user: "nova",
    password: "password",
    database: "travelexperts"
});
const packages = [];
app.set('view engine', 'ejs'); 
app.use(express.static("public"));
app.use(express.static("./views/", { "content-type": "text/ejs" }));
app.use("/fonts", express.static("fonts"));
app.use("/media", express.static("media"));

app.get('/vp/vp.css', (req, res) => {
    res.sendFile(__dirname + '/public/vp/vp.css');
});

app.get('/vp', (req, res)=>{
    const query = 'SELECT * FROM packages';
    con.query (query, (err, rows) => {
        if (err) {
            console.error('Error fetching data from the database:', err);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.render('vp.ejs', {packages:rows});
    });
});

app.listen(8000, () => {
  console.log('Server started on port 8000');
});