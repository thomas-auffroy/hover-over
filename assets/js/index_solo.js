const re = /\s*(?:;|$)\s*/

const gradContainer = document.querySelector("[gradient-container]");
const color = gradContainer.getAttribute("color").split(re);
const amplifier = parseInt(gradContainer.getAttribute("amp"));
var gradX = gradContainer.getBoundingClientRect().x;
var gradWidth = gradContainer.getBoundingClientRect().width;


var grad;

window.addEventListener("DOMContentLoaded", () => {
	let div = document.createElement("div");
	div.setAttribute("gradient","");
	gradContainer.appendChild(div);
	grad = document.querySelector("[gradient]");

	if (color.length === 3){
		grad.style = `background : linear-gradient(to right, ${color[0]}, ${color[1]}, ${color[2]})`;
	} else {
		grad.style = `background : linear-gradient(to right, ${color[0]}, ${color[1]})`;
	}
})





window.addEventListener("mousemove", arg => {
	let mouseX = arg.clientX;
	let percentage = 100 * (mouseX - gradX) / gradWidth;
	
	if (color.length === 3){
		grad.style = `background : linear-gradient(to right, ${color[0]} ${percentage - amplifier}%,${color[1]}, ${color[2]} ${percentage + amplifier}%)`;
	} else {
		grad.style = `background : linear-gradient(to right, ${color[0]} ${percentage - amplifier}%, ${color[1]} ${percentage + amplifier}%)`;
	}
})

window.addEventListener("resize", () => {
	gradX = gradContainer.getBoundingClientRect().x;
	gradWidth = gradContainer.getBoundingClientRect().width;
})

