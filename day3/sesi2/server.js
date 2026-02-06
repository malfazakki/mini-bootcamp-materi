const express = require("express");
const app = express();
app.use(express.json());

const port = 3000;

let daftarPengeluaran = [
	{ id: 1, nama: "Beli Kopi", nominal: 15000 },
	{ id: 2, nama: "Bensin", nominal: 50000 },
];

// Read (Mengirim data pengeluaran)
app.get("/pengeluaran", (req, res) => {
	res.json(daftarPengeluaran);
});

// Create (Menambah data pengeluaran)
app.post("/pengeluaran", (req, res) => {
	const dataBaru = {
		id: daftarPengeluaran.length + 1,
		nama: req.body.nama,
		nominal: req.body.nominal,
	};

	daftarPengeluaran.push(dataBaru);

	res.json("Data Pengeluaran berhasil ditambahkan");
});

// Update (Mengubah data pengeluaran)
app.put("/pengeluaran/:id", (req, res) => {
	const idUbah = parseInt(req.params.id);
	const { nama, nominal } = req.body;

	const index = daftarPengeluaran.findIndex((p) => {
		return p.id === idUbah;
	});

	if (index !== -1) {
		daftarPengeluaran[index].nama = nama || daftarPengeluaran[index].nama;
		daftarPengeluaran[index].nominal = nominal || daftarPengeluaran[index].nominal;

		res.json(`Data dengan ID:${idUbah} berhasil diubah`);
	} else {
		res.status(404).json("Data tidak ditemukan");
	}
});

// Delete (Menghapus data pengeluaran)
app.delete("/pengeluaran/:id", (req, res) => {
	const idHapus = parseInt(req.params.id);

	const dataBaru = daftarPengeluaran.filter((p) => {
		return p.id !== idHapus;
	});

	daftarPengeluaran = dataBaru;

	res.json(`Data ID: ${idHapus} berhasil dihapus`);
});

app.listen(port, () => {
	console.log(`Server berjalan di localhost:${port}`);
});
