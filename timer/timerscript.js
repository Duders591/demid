console.log("JavaScript connected successfully!");
const url = new URL(window.location.href);
const title = document.getElementById("title");
let seconds = url.searchParams.get("seconds");
let minutes = url.searchParams.get("minutes");
let hours = url.searchParams.get("hours");
const time = document.getElementById("timer");

if (hours < 10) {
	hours = "0" + hours;
}
if (minutes < 10) {
	minutes = "0" + minutes;
}
if (seconds < 10) {
	seconds = "0" + seconds;
}
time.textContent = `${hours}:${minutes}:${seconds}`;
title.innerHTML = `${hours}:${minutes}:${seconds}`;
const timer = setInterval(() => {
	
	seconds--;
	if (seconds < 0) {
		if (minutes > 0) {
			minutes--;
			seconds = 59;
			if (minutes < 10) {
				minutes = "0" + minutes;
			}
		} else {
			if (hours > 0) {
				hours--;
				minutes = 59;
				seconds = 59;
			if (hours < 10) {
				hours = "0" + hours;
			}
			} else {
				time.textContent = "00:00:00";
				title.innerHTML = "00:00:00"
				time.style = "color: red;";
				clearInterval(timer);
				return;
			}
		}
	}
if (seconds < 10) {
	seconds = "0" + seconds;
}


time.textContent = `${hours}:${minutes}:${seconds}`;
title.textContent = `${hours}:${minutes}:${seconds}`;
}, 1000);
