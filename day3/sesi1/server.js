const express = require("express");
const app = express();
const port = 3000;

// route home
app.get("/", (req, res) => {
	res.send("Halo ini adalah server buatan saya!");
});

// menjalankan server
app.listen(port, () => {
	console.log(`Server berjalan di localhost:${port}`);
});
