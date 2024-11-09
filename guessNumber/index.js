
const inputFiled = document.querySelector(".input-filed")
const form = document.querySelector("form")
let output = document.querySelector(".output")
let guessDisplay = document.querySelector(".guessDisplay")
const submitBtn = document.querySelector(".submit-Btn")
const startGame = document.querySelector(".start-game")



;(function(){


let randomNum = 0
let allGuessArray = []

    randomNum = (Math.floor(Math.random() * 100)) 
 form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const inputFiledValue = parseInt(inputFiled.value)
    // console.log( inputFiledValue)

    // prvent the duplicate number
    if(allGuessArray.includes(inputFiledValue)){
        output.innerText = 'exist one try new' 
        form.reset()
        inputFiled.focus()
        return;
    }
    if(randomNum > inputFiledValue){
        output.innerText = 'too low!'
        guessDisplay.innerText = inputFiledValue
        
    }else if(randomNum < inputFiledValue){
        output.innerText = 'too high!'
        
    }else{
        output.innerText = 'you got it! congratulation'
        startGame.disabled = false
        submitBtn.disabled = true
        
    }
    inputFiled.focus()
     allGuessArray.push(inputFiledValue)
     guessDisplay.innerText = "your guess :" + allGuessArray.join(',')
    form.reset()

    
    // lost chance statement 
    if(allGuessArray.length > 10){
        output.innerText = 'you lost chance'
        guessDisplay.innerText = "number was :" + `${randomNum}`
        startGame.disabled = false
        submitBtn.disabled = true
        allGuessArray = []
        inputFiled.value = ''
    }
})

// after complet start new game
startGame.addEventListener('click',()=>{
    guessDisplay.innerText = ''
    allGuessArray = []
    output.innerText = ''
    startGame.disabled = true
    submitBtn.disabled = false
    randomNum = (Math.floor(Math.random() * 100))
    inputFiled.focus()
})
})()
