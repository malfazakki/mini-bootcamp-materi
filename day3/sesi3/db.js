const { Client } = require("pg");

const client = new Client({
	host: "localhost",
	user: "postgres",
	password: "M@lfazakk1",
	database: "expense_tracker_db",
	port: 5432,
});

client
	.connect()
	.then(() => console.log("Terhubung ke database."))
	.catch((err) => console.error("Gagal konek: ", err));

module.exports = client;
