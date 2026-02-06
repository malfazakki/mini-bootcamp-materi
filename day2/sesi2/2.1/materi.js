const input = document.getElementById("name-input");
const button = document.getElementById("submit-button");

button.addEventListener("click", () => {
	if (input.value === "") {
		alert("Nama tidak boleh kosong");
	} else if (input.value.length < 3) {
		alert("Karakter tidak boleh kurang dari 3");
	} else {
		alert("Terimakasih data terkirim");
	}
});
