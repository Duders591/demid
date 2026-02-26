console.log("Javascript connected successfully!");
let siteChoice = null;
let visualUserChoice = null;
let visualSiteChoice = null;
const resultText = document.getElementById("result");
function compare(userchoice) {
    siteChoice = Math.floor(Math.random() * 3);
    if (userchoice === 0) {
        visualUserChoice = "🪨";
    } else if (userchoice === 1) {
        visualUserChoice = "📄";
    } else if (userchoice === 2) {
        visualUserChoice = "✂️";
    }
    if (siteChoice === 0) {
        visualSiteChoice = "🪨";
    } else if (siteChoice === 1) {
        visualSiteChoice = "📄";
    } else if (siteChoice === 2) {
        visualSiteChoice = "✂️";
    }
    document.getElementById("visualChoice").textContent = `${visualUserChoice}  ${visualSiteChoice}`;
    console.log(siteChoice);
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
    if (userchoice === siteChoice) {
        resultText.textContent = "Gelijk Spel";
        setTimeout(() => {
            location.reload();
        }, 3000);
    } else if (userchoice === 0) {
        if (siteChoice === 1) {
            resultText.textContent = "Je hebt verloren";
        } else if (siteChoice === 2) {
            resultText.textContent = "Je hebt gewonnen!";
        }
        setTimeout(() => {
            location.reload();
        }, 3000);
    } else if (userchoice === 1) {
        if (siteChoice === 0) {
            resultText.textContent = "Je hebt gewonnen!";
        } else if (siteChoice === 2) {
            resultText.textContent = "Je hebt verloren";
        }
        setTimeout(() => {
            location.reload();
        }, 3000);
    } else if (userchoice === 2) {
        if (siteChoice === 0) {
            resultText.textContent = "Je hebt verloren";
        } else if (siteChoice === 1) {
            resultText.textContent = "Je hebt gewonnen!";
        }
        setTimeout(() => {
            location.reload();
        }, 3000);
    }
}
