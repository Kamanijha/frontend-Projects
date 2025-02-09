
const checkBoxList = document.querySelectorAll(".coustom-chekebox")
const inputListValue = document.querySelectorAll(".goal-input")
const errorLevel = document.querySelector(".error-lable")
const progressBar = document.querySelector(".progress-bar")
const progressValue = document.querySelector(".progress-value")
const progressLable = document.querySelector(".progress-label span")

const allQuets = [
    'Raise the bar by completing your goals!',
    'Well begun is half done.😁',
    'Just a stap away keep going',
    'whoa! you just completed the goals ,Time for chill: Well done👍🏼'
]
  

// intilalize the empty object
  const allGoals = JSON.parse(localStorage.getItem("allGoals")) || {
    first:{
        name:"",
        completed:false,
    },
    second:{
        name:"",
        completed:false,
    },
    third:{
        name:"",
        completed:false,
    },
  }
  let completedGoalsCount = Object.values(allGoals).filter((goals)=>(goals.completed)).length
   progressValue.style.width = `${completedGoalsCount/3 * 100}%`
   progressValue.firstChild.innerText = `${completedGoalsCount}/3  completed`
   progressLable.innerText = allQuets[completedGoalsCount]
checkBoxList.forEach((checkBox)=>{
    checkBox.addEventListener('click',(e)=>{
        const allGoalAdded = [...inputListValue].every((input)=>{
            return input.value
        })
        if(allGoalAdded){
            (checkBox.parentElement.classList.toggle('completed'))
            
            const inputId = checkBox.nextElementSibling.id
            // console.log(inputId)
            allGoals[inputId].completed = !allGoals[inputId].completed
            completedGoalsCount = Object.values(allGoals).filter((goals)=>(goals.completed)).length
            
              progressValue.style.width = `${completedGoalsCount/3 * 100}%`
              progressValue.firstChild.innerText = `${completedGoalsCount}/3  completed`
              progressLable.innerText = allQuets[completedGoalsCount]
            localStorage.setItem("allGoals",JSON.stringify(allGoals))
            
        //  console.log("clicked")
        }else{
            progressBar.classList.add("show-error")
            // errorLevel.parentElement.classList.add("show-error")
            
        }
    })
})
inputListValue.forEach((input)=>{
    
    
    // fatch data from local storage
    const goal = allGoals[input.id];
    if (goal) {
        input.value = goal.name;
        if(goal.completed){
            input.parentElement.classList.add('completed')
        }
    }

    // when 
    input.addEventListener('focus',()=>{
        progressBar.classList.remove("show-error")
    })
    
    input.addEventListener('input',(e)=>{
        if(allGoals[input.id].completed){
            input.value = allGoals[input.id].name
            return
        }
        //  console.log(input.id)
        allGoals[input.id].name = input.value
            
        // console.log(allGoals)
        localStorage.setItem("allGoals",JSON.stringify(allGoals))
    })
})       
        