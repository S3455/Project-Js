let saveEl  = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

console.log(saveEl)

// Incrementer

function increment() {
    count = count + 1
    countEl.innerText = count
}

// Sauvegarder

function save() {
    let countStr = count+ " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}


