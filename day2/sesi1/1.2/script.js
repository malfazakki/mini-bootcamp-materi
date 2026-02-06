const boxComponent = document.querySelector(".box");

boxComponent.style.backgroundColor = "red";
boxComponent.style.height = "100px";
boxComponent.style.color = "white";

boxComponent.textContent = "Selamat Datang";

const rubahContentButton = () => {
	const dynamicButton = document.querySelector(".dynamic-button");

	dynamicButton.textContent = "Berhasil Diubah!";

	dynamicButton.style.backgroundColor = "green";
	dynamicButton.style.color = "white";
};
