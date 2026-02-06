const tombolTambah = document.getElementById("tombol-tambah");
const inputNama = document.getElementById("nama-pengeluaran");
const inputNominal = document.getElementById("nominal-pengeluaran");
const daftarList = document.getElementById("daftar-pengeluaran");
const tampilanTotal = document.getElementById("total-harga");

let total = 0;

tombolTambah.addEventListener("click", () => {
	const nama = inputNama.value;
	const nominal = parseInt(inputNominal.value);

	if (nama === "" || isNaN(nominal)) {
		alert("isi nominal dan jumlah dengan benar");
		return;
	}

	// buat kotak baru (li)
	const itemBaru = document.createElement("li");
	itemBaru.innerHTML = `<span>${nama} - Rp. ${nominal.toLocaleString()}</span> <button class="tombol-hapus">Hapus</button>`;

	// buat fungsi hapus
	itemBaru.querySelector(".tombol-hapus").addEventListener("click", () => {
		// total = total - nominal
		total -= nominal;
		tampilanTotal.innerText = total.toLocaleString();
		itemBaru.remove();
	});

	// masukkan ke daftar dan update total
	daftarList.appendChild(itemBaru);
	total += nominal;
	tampilanTotal.innerText = total.toLocaleString();

	// kosongkan input
	inputNama.value = "";
	inputNominal.value = "";
});
