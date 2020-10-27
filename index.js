const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("public"));
app.use(express.json());

app.get("*", (req,res) => {
	res.sendFile(path.resolve(__dirname, "public", "index.html"));
})
app.post("/api/", (req, res) =>{
	let {name} = req.body;
	console.log(`${name} вспомнил свое имя `);
	res.json(`Что ж, ты хотя бы знаешь свое имя, ${name}`);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log("Server is running"));