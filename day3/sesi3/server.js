const express = require("express");
const client = require("./db");
const app = express();
app.use(express.json());

const port = 3000;

let daftarPengeluaran = [
	{ id: 1, nama: "Beli Kopi", nominal: 15000 },
	{ id: 2, nama: "Bensin", nominal: 50000 },
];

// Read (Mengirim data pengeluaran)
app.get("/pengeluaran", async (req, res) => {
	try {
		const result = await client.query("SELECT * FROM pengeluaran");

		res.json(result.rows);
	} catch (error) {
		res.status(500).json("Internal Server Error");
	}
});

// Create (Menambah data pengeluaran)
app.post("/pengeluaran", async (req, res) => {
	try {
		const { nama, nominal } = req.body;

		await client.query("INSERT INTO pengeluaran (nama, nominal) VALUES ($1, $2) RETURNING *", [nama, nominal]);

		res.json("Data pengeluaran berhasil ditambahkan");
	} catch (error) {
		res.status(500).json("Internal Server Error");
	}
});

// Update (Mengubah data pengeluaran)
app.put("/pengeluaran/:id", async (req, res) => {
	try {
		const idUbah = parseInt(req.params.id);
		const { nama, nominal } = req.body;

		const result = await client.query("UPDATE pengeluaran SET nama = $1, nominal = $2 WHERE id = $3", [
			nama,
			nominal,
			idUbah,
		]);

		if (result.rowCount > 0) {
			res.json(`Data dengan ID:${idUbah} berhasil diubah`);
		} else {
			res.status(404).json("Data tidak ditemukan");
		}
	} catch (error) {
		console.error(error);
		res.status(500).json("Internal Server Error");
	}
});

// Delete (Menghapus data pengeluaran)
app.delete("/pengeluaran/:id", async (req, res) => {
	try {
		const idHapus = parseInt(req.params.id);

		const result = await client.query("DELETE FROM pengeluaran WHERE id = $1", [idHapus]);

		if (result.rowCount > 0) {
			res.json(`Data ID: ${idHapus} berhasil dihapus`);
		} else {
			res.status(404).json("Data tidak ditemukan");
		}
	} catch (error) {
		res.status(500).json("Internal Server Error");
	}
});

app.listen(port, () => {
	console.log(`Server berjalan di localhost:${port}`);
});
