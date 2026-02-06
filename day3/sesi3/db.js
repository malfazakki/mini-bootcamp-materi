const { Client } = require("pg");
require("dotenv").config();

// const client = new Client({
// 	host: "localhost",
// 	user: "postgres",
// 	password: "M@lfazakk1",
// 	database: "expense_tracker_db",
// 	port: 5432,
// });

const client = new Client({
	connectionString: process.env.DATABASE_URL,
});

client
	.connect()
	.then(() => console.log("Terhubung ke database."))
	.catch((err) => console.error("Gagal konek: ", err));

module.exports = client;
