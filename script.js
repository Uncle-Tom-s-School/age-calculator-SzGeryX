let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");

let dayo = document.getElementById("dayo")
let montho = document.getElementById("montho")
let yearo = document.getElementById("yearo")

const btn = document.getElementById("arrow")

const inputs = document.querySelectorAll("input")
const errors = document.getElementsByClassName("error")


const curr = new Date()
year.setAttribute("value", curr.getFullYear())
year.setAttribute("min", curr.getFullYear())
month.setAttribute("value", curr.getMonth() + 1)
month.setAttribute("min", curr.getMonth() + 1)
day.setAttribute("value", curr.getDate())
day.setAttribute("min", curr.getDate())

function readInput() {
    month = document.getElementById("month");
    year = document.getElementById("year");
    day = document.getElementById("day"); 
}

function calculateTime() {
    let now = new Date();
    now.setHours(0,0,0,0);
    const ref = new Date(`${year.value}//${month.value}//${day.value}`);
    if (ref - now < 0 || ref - now == NaN) {
        return
    }
    let diff = new Date(ref - now)
    

    dayo.innerText = diff.getDate() - 1
    montho.innerText = diff.getMonth()
    yearo.innerText = diff.getFullYear() - 1970
}

inputs.forEach(function(elem) {
    elem.addEventListener("change", readInput)
});

arrow.addEventListener("click", calculateTime)

for (let i = 0; i < 3; i++) {

}