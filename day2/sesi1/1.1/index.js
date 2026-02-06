// Introduction to Data Structure

// 1. Array

// const names = ["Yusuf", "Rangga", "Fatih"];

const companies = [
	"Microsoft",
	"Apple",
	["Yamaha Music", "Yamaha Motor"],
	["Astra Honda Motor", "Keihin", ["Musashi", "Nissin"]],
];

// mengetahui jumlah data didalam array
// length
// console.log(companies[2].length);

// for (let awal = 10; awal > 5; awal++) {
// 	console.log(`Walking to-${awal}`);
// }

// for (let i = 0; i < companies.length; i++) {
// 	console.log("Nama Perusahaannya: " + companies[i]);
// }

const siswa1 = {
	nama: "Fatih",
	pekerjaan: "Mentor",
	alamat: "Jogja",
	skillset: ["javascript", "typescript", "golang"],
	experience: 3,
	company: {
		name: "Nizom",
		address: "Jakarta",
		product: "POS Nizom",
	},
};

// snake_case nama_saya
// camelCase namaSaya
// kebab-case nama-saya
// PascalCase NamaSaya

// dot notation
// console.log(siswa1.nama);

// bracket notation
// console.log(siswa1["pekerjaan"]);

const hitungDuaAngka = (angka1, angka2) => {
	return angka1 + angka2;
};

const jumlahAngka = hitungDuaAngka(2, 3);

// console.log(jumlahAngka);

// Perulangan Array

// 1. forEach
const cars = ["Daihatsu", "Toyota", "Ferrari"];
cars.forEach((car) => {
	// console.log(car);
});

// 2. map
const numbers = [1, 2, 3, 4, 5];

// console.log(
// 	numbers.map((number) => {
// 		return number + 5;
// 	}),
// );

const newNumbers = numbers.map((number) => {
	return number * 2;
});

// console.log(newNumbers);

const evenNumber = numbers.filter((number) => {
	return number % 2 === 0;
});

// console.log(evenNumber);

const oddNumber = numbers.filter((number) => {
	return number % 2 !== 0;
});

// console.log(oddNumber);

// if - else if - else

const hari = "Senin";

if (hari === "Senin" && hari === "Rabu") {
	console.log("Briefing Pagi");
} else if (hari === "Jum'at" || hari === "Sabtu") {
	console.log("Masuk Kerja Setengah Hari");
} else if (hari !== "Minggu") {
	console.log("Masuk Kerja");
}

const totalPembelian = 110000;
let discount = 0;

if (totalPembelian > 100000 && totalPembelian < 200000) {
	discount = 20000;
} else if (totalPembelian > 200000) {
	discount = 50000;
} else {
	discount = 0;
}

console.log(discount);

const students = [
	{
		name: "Yusuf",
		address: "Yogyakarta",
		hobbies: "Writing",
	},
	{
		name: "Fatih",
		address: "Bekasi",
		hobbies: "Coding",
	},
	{
		name: "Rangga",
		address: "Bantul",
		hobbies: "Working",
	},
];

const studentsName = students.map((student) => {
	return student.name;
});

const studentOutsideYogyakarta = students.filter((student) => {
	return student.address !== "Yogyakarta";
});

console.log(studentOutsideYogyakarta);
