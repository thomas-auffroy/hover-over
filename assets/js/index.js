const re = /\s*(?:;|$)\s*/

const gradContainers = document.querySelectorAll("[gradient-container]");
let colors = [];
let amplifiers = [];
var gradXs = [];
var gradWidths = [];
gradContainers.forEach(el => {
	colors.push(el.getAttribute("color").split(re));
	amplifiers.push(parseInt(el.getAttribute("amp")));
	gradXs.push(el.getBoundingClientRect().x);
	gradWidths.push(el.getBoundingClientRect().width);
})
var grads = [];

window.addEventListener("DOMContentLoaded", () => {
	
	gradContainers.forEach(el => {
		let div = document.createElement("div");
		div.setAttribute("gradient","");
		el.appendChild(div);
	})

	grads = document.querySelectorAll("[gradient]");

	for (i = 0; i<grads.length; i++){
		if (colors[i].length == 3){
			grads[i].style = `background : linear-gradient(to right, ${colors[i][0]}, ${colors[i][1]}, ${colors[i][2]})`;
			document.getElementById("background-text").innerText = `background : linear-gradient(to right, ${colors[i][0]} ,${colors[i][1]}, ${colors[i][2]})`;
		} else {
			grads[i].style = `background : linear-gradient(to right, ${colors[i][0]}, ${colors[i][1]})`;
		}
	}

})

window.addEventListener("mousemove", arg => {
	let mouseX = arg.clientX;
	let percentages = [];

	for (i = 0; i < gradContainers.length ; i++){
		percentages.push(100 * (mouseX - gradXs[i]) / gradWidths[i]);
	}

	for (i = 0; i<grads.length; i++){
		if (colors[i].length == 3){
			grads[i].style = `background : linear-gradient(to right, ${colors[i][0]} ${percentages[i] - amplifiers[i]}%,${colors[i][1]}, ${colors[i][2]} ${percentages[i] + amplifiers[i]}%)`;
			document.getElementById("background-text").innerText = `background : linear-gradient(to right, ${colors[i][0]} ${Math.trunc(percentages[i]) - amplifiers[i]}%,${colors[i][1]}, ${colors[i][2]} ${Math.trunc(percentages[i]) + amplifiers[i]}%)`;
		} else {
			grads[i].style = `background : linear-gradient(to right, ${colors[i][0]} ${percentages[i] - amplifiers[i]}%, ${colors[i][1]} ${percentages[i] + amplifiers[i]}%)`;
		}
	}
})

window.addEventListener("resize", () => {
	gradXs = [];
	gradWidths = [];
	gradContainers.forEach(el => {
		gradXs.push(el.getBoundingClientRect().x);
		gradWidths.push(el.getBoundingClientRect().width);
	})
})


