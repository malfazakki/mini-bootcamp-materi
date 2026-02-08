// Konfigurasi URL Backend
const API_URL = "https://mini-bootcamp-materi-backend-deploy.vercel.app/pengeluaran";

// Element DOM
const tombolTambah = document.getElementById("tombol-tambah");
const inputNama = document.getElementById("nama-pengeluaran");
const inputNominal = document.getElementById("nominal-pengeluaran");
const daftarList = document.getElementById("daftar-pengeluaran");
const tampilanTotal = document.getElementById("total-harga");

// Load data saat halaman dibuka
loadPengeluaran();

// Fungsi: Ambil semua data dari Backend
async function loadPengeluaran() {
	try {
		const response = await fetch(API_URL);
		const data = await response.json();
		tampilkanDaftar(data);
	} catch (error) {
		console.error("Gagal mengambil data:", error);
	}
}

// Fungsi: Tampilkan data ke layar
function tampilkanDaftar(data) {
	daftarList.innerHTML = ""; // Bersihkan list
	let total = 0;

	data.forEach((item) => {
		const itemBaru = document.createElement("li");
		itemBaru.innerHTML = `
            <span>${item.nama} - Rp ${item.nominal.toLocaleString()}</span>
            <button class="btn-hapus" data-id="${item.id}">Hapus</button>
        `;

		// Pasang fungsi hapus
		itemBaru.querySelector(".btn-hapus").addEventListener("click", function () {
			hapusPengeluaran(item.id, item.nominal);
		});

		daftarList.appendChild(itemBaru);
		total += item.nominal;
	});

	tampilanTotal.innerText = total.toLocaleString();
}

// Fungsi: Tambah data baru ke Backend
tombolTambah.addEventListener("click", async function () {
	const nama = inputNama.value;
	const nominal = parseInt(inputNominal.value);

	if (nama === "" || isNaN(nominal)) {
		alert("Isi nama dan jumlah uang dengan benar!");
		return;
	}

	try {
		await fetch(API_URL, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ nama, nominal }),
		});

		// Refresh data dari server
		loadPengeluaran();

		// Kosongkan input
		inputNama.value = "";
		inputNominal.value = "";
	} catch (error) {
		console.error("Gagal menambah data:", error);
	}
});

// Fungsi: Hapus data dari Backend
async function hapusPengeluaran(id, nominal) {
	try {
		await fetch(`${API_URL}/${id}`, {
			method: "DELETE",
		});

		// Refresh data dari server
		loadPengeluaran();
	} catch (error) {
		console.error("Gagal menghapus data:", error);
	}
}
