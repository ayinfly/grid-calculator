const box = document.getElementById('box');
let val = "0";

function update() {
    box.textContent = val;
}

function key(num) {
    if (num == 'null') {
        val = "0";
    } else if (num == 'dec') {
        val = (+val / 100).toString();
    } else if (num == 'neg') {
        val = (0 - +val).toString();
    } else if (val == "0") {
        val = num.toString();
    } else {
        val += num;
    }
    update();
}