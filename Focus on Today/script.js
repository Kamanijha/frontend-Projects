
const checkBoxList = document.querySelectorAll(".coustom-chekebox")
const inputListValue = document.querySelectorAll(".goal-input")
const errorLevel = document.querySelector(".error-lable")
const progressBar = document.querySelector(".progress-bar")
const progressValue = document.querySelector(".progress-value")
// inputListValue.innerText = "hello"
//  console.log(progressBar)
checkBoxList.forEach((checkBox)=>{
    checkBox.addEventListener('click',(e)=>{
        const allGoalAdded = [...inputListValue].every((input)=>{
            return input.value
        })
        if(allGoalAdded){
            (checkBox.parentElement.classList.add('completed'))
        //  console.log("clicked")
        }else{
            progressBar.classList.add("show-error")
            // errorLevel.parentElement.classList.add("show-error")
            
        }
    })
})
inputListValue.forEach((input)=>{
    input.addEventListener('focus',()=>{
        progressBar.classList.remove("show-error")
    })
})       
        