//document.getElementById("count-el").innerText = 5

let count = 0;
let saveEl = document.getElementById("save-el");
console.log(saveEl);

function increment () {
    count++;
    document.getElementById("count-el").textContent = count;
}

function decrement () {
    count--;
    document.getElementById("count-el").textContent = count;
}

function save () {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    count = 0;
    document.getElementById("count-el").textContent = count;
}

