const darkThemeButtonElement = document.getElementById("btn-dark-theme");
const logoElement = document.getElementById("logo");

darkThemeButtonElement.addEventListener("click", () => {
	document.body.classList.toggle("dark");
	logoElement.classList.toggle("invert");
});



const colorRedElement = document.getElementById("color-red");
const colorGreenElement = document.getElementById("color-green");

const rootStyles = document.documentElement.style;

colorRedElement.addEventListener("click", (e) => {
	rootStyles.setProperty("--text-color", e.target.dataset.color);
	console.dir(e.target);
});

colorGreenElement.addEventListener("click", (e) => {
	rootStyles.setProperty("--text-color", e.target.dataset.color);
	console.dir(e.target);
});





	// window.scroll({
	// 	top:99999999999,	
	// 	behavior:"smooth",
	// });
		

