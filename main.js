const btnStart = document.querySelector(".start");
const btnPause = document.querySelector(".pause");
const btnStop = document.querySelector(".stop");
const btnReset = document.querySelector(".reset");
const buttons = document.querySelectorAll("button");
const stoper = document.querySelector(".stoper");

let i = true;

//milliseconds
let ms = 0;
//seconds
let s = 0;
//minutes
let m = 0;


buttons.forEach(button => button.addEventListener("mousedown", () => {
    button.classList.add("down");
})
)

buttons.forEach(button => button.addEventListener("mouseup", () => {
    button.classList.remove("down");
})
)

btnStart.addEventListener("click", () => {

if (i){

counting = () => {
 
    stoper.textContent = (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s) + ":" + (ms < 10 ? "0" + ms : ms);
    ms++;

    if (ms===100) {
        s++;
        ms = 0;}

        if(s ===60) {
            m++;
            s = 0;
        }
}

i = false;

} else {return}

const counter = setInterval(counting, 10);

btnPause.addEventListener("click", () => {
    clearInterval(counter);
    i = true;
})

btnStop.addEventListener("click", () => {
    stoper.textContent = "00:00:00";
    clearInterval(counter);
    ms = 0;
    s = 0;
    m = 0;
    i = true;
}
)

btnReset.addEventListener("click", () => {
    stoper.textContent = "00:00:00";
    ms = 0;
    s = 0;
    m = 0;
})

})
