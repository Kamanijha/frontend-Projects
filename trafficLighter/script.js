
//let greenPara = document.querySelector(".less")
// let redPara = document.querySelector(".heavy")
const redDiv = document.querySelector(".red")
const greenDiv = document.querySelector(".green")
const yellowDiv = document.querySelector(".yellow")
let lights = ['red', 'green', 'yellow']
let lightIndex = 0

const setIntervalId = setInterval(() => {
    redDiv.style = "background-color:gray";
    greenDiv.style = "background-color:gray";
    yellowDiv.style = "background-color:gray";

    if (lights[lightIndex] === "red") {
        redDiv.style.backgroundColor = "red";
        lightIndex++
    } else if (lights[lightIndex] === "green") {
        
        greenDiv.style.backgroundColor = "green";
    } else if (lights[lightIndex] === "yellow") {
        yellowDiv.style.backgroundColor = "yellow";
    }
    lightIndex = (lightIndex + 1) % lights.length

}, 2000)







