const n1in = document.getElementById("n1");
const n2in = document.getElementById("n2");

function calc(n1, n2) {
    var done = false;
    var kgv
    for (var i = 1; done; i++) {
        if (n1 * i === n2) {
            kgv = n2;
            done = !done;
        } else if (n1 === n2 * i) {
            kgv = n1;
            done = !done;
        }
        if (done) {
            console.log(kgv);
        }
    }
}