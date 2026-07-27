// TODO: 
// maak het zodat de tooltip van showButton verandert 'on' → ''

// bootstrap dingen
let tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
let tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
// mijn code
const passText = document.getElementById("passwordinput");
const letterToggle = document.getElementById("letters");
const numberToggle = document.getElementById("numbers");
const charToggle = document.getElementById("characters");
const showButton = document.getElementById("showbutton");
const copyButton = document.getElementById("copybutton");
const showBtnTooltip = bootstrap.Tooltip.getOrCreateInstance(showButton);
const copyBtnTooltip = bootstrap.Tooltip.getOrCreateInstance(copyButton);
const passStuff = document.getElementsByClassName("pass-stuff");
let passLength = document.getElementById("passLength").value;
let passVis = false;
let characters = []
let password = ""
let i = 0;
let e = 0;
function updateLength() {
passLength = document.getElementById("passLength").value;
}
function generate(lt, nt, ct) {
    if (lt.checked) {
        characters.push("a", "A", "b", "B", "c", "C", "d", "D", "e", "E", "f", "F", "g", "G", "h", "H", "i", "I", "j", "J", "k", "K", "l", "L", "m", "M", "n", "N", "o", "O", "p", "P", "q", "Q", "r", "R", "s", "S", "t", "T", "u", "U", "v", "V", "w", "W", "x", "X", "y", "Y", "z", "Z");
    }
    if (nt.checked) {
        characters.push("1", "2", "3", "4", "5", "6", "7", "8", "9", "0");
    }
    if (ct.checked) {
        characters.push("!", "@", "#", "$", "%", "€", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", ":", "|", ",", "<", ".", ">", "/", "?");
    }
    if (!lt.checked && !nt.checked && !ct.checked) {
        location.reload();
    }
    while (i < passLength) {
        password += characters[Math.floor(Math.random() * characters.length)];
        i++;
        if (i >= passLength) {
            while (e < passStuff.length) {
                passStuff[e].classList.remove("visually-hidden");
                e++;
                if (e >= passStuff.length) {
                    passText.value = password;
                }
            }
        }
    }
    password = "";
    characters = [];
    i = 0;
    e = 0;
}
function toggleVisibility() {
    if (!passVis) {
        passText.type = "";
        showButton.innerHTML = `<i class="bi bi-eye-slash"></i>`;
        showBtnTooltip.setContent({ ".tooltip-inner": "Wachtwoord onzichtbaar maken"});
    } else {
        passText.type = "password";
        showButton.innerHTML = `<i class="bi bi-eye"></i>`;
        showBtnTooltip.setContent({ ".tooltip-inner": "Wachtwoord zichtbaar maken"});
    };
    passVis = !passVis;
}
function copyPass() {
        navigator.clipboard.writeText(passText.value);
        copyBtnTooltip.setContent({ ".tooltip-inner": "Gekopieerd!"});
        setTimeout(() => {
            copyBtnTooltip.setContent({ ".tooltip-inner": "Wachtwoord kopieren"});
        }, 1000);
}
