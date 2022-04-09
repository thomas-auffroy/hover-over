window.addEventListener("DOMContentLoaded", () => {

	if (document.getElementById("choice2").checked){
		document.getElementById('third').style = "visibility: hidden";
	} else {
		document.getElementById('third').style = "visibility: visible";		
	}
	
	var color1 = document.getElementById("color1");
	plugin.getContainers()[0].colors[0] = color1.value;
	
	var color2 = document.getElementById("color2");
	plugin.getContainers()[0].colors[1] = color2.value;
	
	var color3 = document.getElementById("color3");
	plugin.getContainers()[0].colors[2] = color3.value;

	document.getElementById("value").innerText = plugin.getContainers()[0].amplifier;
})

color1.addEventListener("change", arg => {
	plugin.getContainers()[0].colors[0] = arg.target.value;
})
color2.addEventListener("change", arg => {
	plugin.getContainers()[0].colors[1] = arg.target.value;
})
color3.addEventListener("change", arg => {
	plugin.getContainers()[0].colors[2] = arg.target.value;
})

document.getElementById("choice2").addEventListener("change", () => {
	document.getElementById('third').style = "visibility: hidden";
	plugin.getContainers()[0].colors.pop();
})
document.getElementById("choice3").addEventListener("change", () => {
	document.getElementById('third').style = "visibility: visible";
	plugin.getContainers()[0].colors.push(color3.value);
})

amplifier.addEventListener("change", arg => {
	plugin.getContainers()[0].amplifier = arg.target.valueAsNumber;
	document.getElementById("value").innerText =plugin.getContainers()[0].amplifier;
})