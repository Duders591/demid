const copyButtons = document.body.getElementsByClassName("copy-buttons");
function copy(textToCopy) {
    navigator.clipboard.writeText(textToCopy);

}
copyButtons[0].addEventListener("click", function(){copy("javascript:(function(){let demidColorChanger=0;setInterval((()=>{document.body.style.filter=`hue-rotate(${demidColorChanger}deg)`,demidColorChanger++}),100);}());")});
copyButtons[1].addEventListener("click", function(){copy("javascript:(function(){let demidCrashI="a";for(;;)demidCrashI+="a",console.log(demidCrashI);}());")});
