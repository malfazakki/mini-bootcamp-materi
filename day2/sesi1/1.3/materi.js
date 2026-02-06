const button = document.getElementById("buttonKlik");

button.addEventListener("click", function () {
	alert("tombol berhasil di klik");
});

const input = document.getElementById("nameInput");

input.addEventListener("input", function () {
	console.log(`Hasil Input: ${input.value}`);
});
