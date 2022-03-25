const re = /\s*(?:;|$)\s*/

var containers = [];

window.addEventListener("DOMContentLoaded", () => {

	document.querySelectorAll("[gradient-container]").forEach(el => {
		let obj = {};
		obj["self"] = el;
		obj["colors"] = el.getAttribute("color").split(re);
		obj["amplifier"] = parseInt(el.getAttribute("amp"));
		obj["x"] = el.getBoundingClientRect().x;
		obj["width"] = el.getBoundingClientRect().width;
		obj["percentage"] = 0;
	
		let div = document.createElement("gradientContent");
		div.setAttribute("gradient","");
		el.appendChild(div);

		obj["child"] = div;

		containers.push(obj);
	})
	
	containers.forEach(el => {
		if (el.colors.length == 3){
			el.child.style = `background : linear-gradient(to right, ${el.colors[0]}, ${el.colors[1]}, ${el.colors[2]})`;
		} else {
			el.child.style = `background : linear-gradient(to right, ${el.colors[0]}, ${el.colors[1]}`;
		}
	})
})

window.addEventListener("mousemove", arg => {
	let mouseX = arg.clientX;

	containers.forEach(el => {
		el.percentage = 100 * (mouseX - el.x) / el.width;

		if (el.colors.length == 3){
			el.child.style = `background : linear-gradient(to right, ${el.colors[0]} ${el.percentage - el.amplifier}%, ${el.colors[1]}, ${el.colors[2]} ${el.percentage + el.amplifier}%)`;
		} else {
			el.child.style = `background : linear-gradient(to right, ${el.colors[0]} ${el.percentage - el.amplifier}%, ${el.colors[1]} ${el.percentage + el.amplifier}%)`;
		}
	})
})

window.addEventListener("resize", () => {
	containers.forEach(el => {
		el.x = el.self.getBoundingClientRect().x;
		el.width = el.self.getBoundingClientRect().width;
	})
})