const span = document.querySelector('span')
const wordList = ['learn','explore','study',]

function multiTypingFunc(){
let wordIndex = 0
let charcterIndex = 0
let reverseTyping = false
let word = 'developer'
const setIntervalId = setInterval(()=>{
    if(!reverseTyping){
        span.innerText = span.innerText+ wordList[wordIndex][charcterIndex]
        charcterIndex ++

    }else{
        span.innerText = span.innerText.slice(0,span.innerText.length-1)
    }
    
    if(charcterIndex === wordList[wordIndex].length){
        reverseTyping = true
    }

    if(span.innerText.length === 0 && reverseTyping){
        reverseTyping = false
        charcterIndex = 0
        wordIndex++
    }

    
    if(wordIndex === wordList.length){
        wordIndex = 0
    }
    
},300)
}
multiTypingFunc()