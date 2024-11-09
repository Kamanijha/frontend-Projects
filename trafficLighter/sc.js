const aquaDiv = document.querySelector(".aqua")
const redDiv = document.querySelector(".red")
const greenDiv = document.querySelector(".green")
const yellowDiv = document.querySelector(".yellow")
const massege = document.querySelector(".traffic-massage")
let lights = ['red', 'green', 'yellow','aqua']
let lightIndex = 0

// let paraText = ['heavy','go','stop']
// let paraIndex = 0
const setIntervalId = setInterval(() => {
    redDiv.style = "background-color:gray";
    greenDiv.style = "background-color:gray";
    yellowDiv.style = "background-color:gray";
    aquaDiv.style = "background-color:gray";
    massege.innerText = ""

    if (lights[lightIndex] === "red") {
        redDiv.style.backgroundColor = "red";
        massege.innerText = "heavy traffic"
        
        
    } else if (lights[lightIndex] === "green") {
        greenDiv.style.backgroundColor = "green";
        massege.innerText = "you go"
         
        
    } else if (lights[lightIndex] === "yellow") {
        yellowDiv.style.backgroundColor = "yellow";
        massege.innerText = "stop for safly"
        
        
    }else if(lights[lightIndex]=== "aqua"){
        aquaDiv.style.backgroundColor = "aqua"
        massege.innerText = "for fun"
    }
    
    lightIndex = (lightIndex + 1) % lights.length
    
}, 2000)