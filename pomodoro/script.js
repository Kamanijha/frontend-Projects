
const timer = document.querySelector(".timer")
const title = document.querySelector(".title")

const startBtn = document.querySelector(".startBtn")
const pauseBtn = document.querySelector(".pauseBtn")
const resumeBtn = document.querySelector(".resumeBtn")
const resetBtn = document.querySelector(".resetBtn")

const work_time = 25 * 60;

function startTimer(){
    timer.innerText = 25 * 60
}
setInterval()
startBtn.addEventListener("click",()=>{
    startTimer()
})

