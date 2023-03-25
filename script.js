const box = document.getElementById('box');
let val = "0";
let clr = false;
let dot = false;

function update() {
    box.textContent = val;
}

function key(num) {
    if (num == 'null') {
        val = "0";
        dot = false;
    } else if (num == 'dec') {
        val = (+val / 100).toString();
        dot = true;
    } else if (num == 'neg') {
        val = (0 - +val).toString();
    } else if (num == '.') {
        if (!dot) {
            val += '.'
            dot = !dot;
        }
    } else if (val == "0") {
        val = num.toString();
    } else {
        val += num;
    }
    update();
}