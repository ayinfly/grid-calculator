const box = document.getElementById('box');
let val = "0";

function update() {
    box.textContent = val;
}

function number(num) {
    if (num == null) {
        val = "0";  
    } else if (val == "0") {
        val = num.toString();
    } else {
        val += num;
    }
    update();
}