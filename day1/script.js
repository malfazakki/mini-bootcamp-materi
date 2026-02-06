// let myName = "Fatih";
// const myPosition = "Mentor";

// function sapaSaya(nama1, nama2) {
// 	console.log(`Selamat Datang ${nama1} dan ${nama2}`);
// }

// function hitungJumlah(angka1, angka2) {
// 	return angka1 + angka2;
// }

// console.log(hitungJumlah(1, 3));

function prosesData() {
	// 1. Ambil apa yang diketik di input
	let inputan = document.getElementById("namaUser").value;

	console.log("Halo " + inputan + "!");

	// 2. Tampilkan ke dalam tag H2 (id="hasil")
	document.getElementById("hasil").innerHTML = `Halo ${inputan} !`;
}
