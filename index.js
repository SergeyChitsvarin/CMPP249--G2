const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

app.use(express.static(path.join(__dirname, "public"), {extensions: ["css","js"]}));
app.use(express.static(path.join(__dirname, "media"), {extensions: ["gif","jpg", "png"]}));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.listen(8000, (err) =>{
	if(err) throw err;
	console.log("Server has started. Port 8000");
});

app.get("/", (req,res) =>{ 
	res.render("homePage", {
	})
//	res.sendFile("homePageStyle.css", { root: path.join(__dirname, "public") })
});

app.get("/contact", (req,res) =>{ 
	res.sendFile("contact")
	res.sendFile("styles")
});

app.get("/packages", (req,res) =>{ 
	res.sendFile("packages")
	res.sendFile("styles")
});

app.get("/registration", (req,res) =>{ 
	res.render("custregister", {
		usernameError: false
	})
});

app.post("/registration", (req, res)=>{
	var tryUsername = req.body.Username;
	var mysql = require('mysql');
	var con = mysql.createConnection({
	host: "localhost",
	user: "traveldbadmin",
	password: "tdba123",
	database: "travelexperts"
	});
	var validUsername = false;
	con.connect(function(err) {
		if (err) throw err;
		var querytext = "SELECT CustomerId FROM customers WHERE CustUsername = '"+tryUsername+"'";
		con.query(querytext, function (err, result, fields) {
			if (err) throw err;
			if(!result.length){
				validUsername = true;
			} else{
				validUsername = false;
			}
			
			if(validUsername){
				querytext = "INSERT INTO customers (CustFirstName, CustLastName, CustAddress, CustCity, CustProv, CustPostal, CustCountry, CustHomePhone, CustBusPhone, CustEmail, CustUsername, CustPassword) VALUES ('";
				querytext += req.body.FirstName+"', '"+req.body.LastName+"', '"+req.body.StreetAddress+"', '"+req.body.City+"', '"+req.body.Province+"', '"+req.body.PostalCode+"', '"+"Canada"+"', '"+req.body.PhoneNumber+"', '"+req.body.BusinessPhone+"', '"+req.body.Email+"', '"+req.body.Username+"', '"+req.body.Password+"')";
				con.query(querytext, function (err, result, fields) {
					if (err) throw err;
				});
				return true
			}else{
				res.render("custregister", {
					usernameError: true
				})
				return false
			}

		});
	
	})
})



/** 
app.use((req,res, next) =>{
	res.status(404);
	res.sendFile("404.html", { root: path.join(__dirname, "views") })
	res.sendFile("styles.css", { root: path.join(__dirname, "public")})
});
*/
