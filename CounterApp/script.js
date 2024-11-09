const minusBtn = document.querySelector(".minus-btn")
const plusBtn  = document.querySelector(".plus-btn")
const count = document.querySelector(".count")
const changeBy = document.querySelector(".changeBy")

const reset = document.querySelector(".reset")
plusBtn.addEventListener('click', ()=>{
    const countValue = +count.innerText
    const changeByValue = +changeBy.value
    count.innerText = countValue + changeByValue
    
    
})

minusBtn.addEventListener('click', ()=>{
    const countValue = +count.innerText
    const changeByValue = +changeBy.value
    count.innerText = countValue - changeByValue
    
})



reset.addEventListener('click', ()=>{
     count.innerText = 0
    
})