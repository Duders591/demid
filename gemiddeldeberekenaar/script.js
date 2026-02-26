console.log("JavaScript linked successfully!");
let sliderAmount = parseFloat(document.getElementById("slider").value);
const counter = document.getElementById("testCounter");
const berekeningen = document.getElementById("berekeningen").children;
let plusElkaar = [];
let i = 0;
let e = 0;
let antwoord = 0;
function update() {
    sliderAmount = parseFloat(document.getElementById("slider").value);
    counter.textContent = sliderAmount;
}
update()
document.getElementById("slider").oninput = update;
function bereken() {
    console.log("Calculation started...")
    update();
    while (i < sliderAmount) {
        plusElkaar.push(berekeningen[i].value);
        i++
        if (i >= sliderAmount) {
            while (e < sliderAmount) {
                antwoord += parseFloat(plusElkaar[e]);
                e++
                if (e >= sliderAmount) {
                    antwoord /= sliderAmount;
                    document.getElementById("antwoord").textContent = `Het gemiddelde van die ${sliderAmount} cijfers is: ${antwoord}`;
                    console.log(antwoord);
                }
            }
        }
    }
    i = 0;
    e = 0;
    antwoord = 0;
    plusElkaar = []
}
