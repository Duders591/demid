const passText = document.getElementById("passwordinput");
const letterToggle = document.getElementById("letters");
const numberToggle = document.getElementById("numbers");
const charToggle = document.getElementById("characters");
const showButton = document.getElementById("showbutton");
let passLength = document.getElementById("passLength").value;
let i = 0;
let e = 0;
let passVis = false;
const passStuff = document.getElementsByClassName("pass-stuff");
let characters = []
let password = ""
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
        passVis = true;
        showButton.innerHTML = `<i class="bi bi-eye-slash"></i>`;
    } else {
        passText.type = "password"
        passVis = false;
        showButton.innerHTML = `<i class="bi bi-eye"></i>`;
    };
}
function copyPass() {
        navigator.clipboard.writeText(passText.value);
        alert("Wachtwoord gekopieerd")
}
