const express = require("express");
const path = require("path");


const app = express();

app.use(express.static(path.join(__dirname, "views"), { extensions: ["html", "htm"]  }), next);
app.use(express.static(path.join(__dirname, "public"), {extensions: ["css","js"]}), next);
app.use(express.static(path.join(__dirname, "media"), {extensions: ["gif","jpg", "png"]}), next);

app.listen(8000, (err) =>{
	if(err) throw err;
	console.log("Server has started. Port 8000");
});

app.get("/", (req,res) =>{ 
	res.sendFile("index")
	res.sendFile("styles")
});

app.use((req,res, next) =>{
	res.status(404);
	res.sendFile("404.html", { root: path.join(__dirname, "views") })
	res.sendFile("styles.css", { root: path.join(__dirname, "public")})
});