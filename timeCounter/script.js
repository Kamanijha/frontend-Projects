
const endDate= "7 july 2012  09:29 am"
const inputs = document.querySelectorAll("input")
document.getElementById("end-date").innerText = endDate

function clock(){
    let end = new Date(endDate)
    let now = new Date()
    let diff = (now - end)/1000
    if(diff < 0) return
    inputs[0].value = (Math.floor(diff/3600/24))
    inputs[1].value = (Math.floor((diff/3600) % 24))
    inputs[2].value = (Math.floor((diff/60) % 60))
    inputs[3].value = (Math.floor((diff % 60)))
}
clock()

setInterval(clock,1000)