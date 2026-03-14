console.log("Javascript connected successfully!");
const inputs = document.getElementById("inputs");
function checkIfValid(input) {
let inputNumber = input.valueAsNumber;
if (Number.isNaN(inputNumber)) {
        input.value = "";
        alert("Geen letters/leestekens invullen!");
    } else if (inputs.children[0].value !== "" && inputs.children[1].value !== "" && inputs.children[2].value !== "") {
		document.getElementById("redirect").href = `timer.html?seconds=${inputs.children[0].value}&minutes=${inputs.children[1].value}&hours=${inputs.children[2].value}`;
	}
}
