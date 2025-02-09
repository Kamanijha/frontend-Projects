
const nameInput = document.querySelector(".name-input")
const myname = document.querySelector(".name")
const ageInput = document.querySelector(".age-input")
const age = document.querySelector(".age")

// nameInput.addEventListener('input',(e)=>{
//     console.log(e.target.value)
//     // localStorage.name =(e.target.value)
//     localStorage.setItem("name",e.target.value)
//     // myname.innerText = e.target.value
//     myname.innerText = localStorage.getItem("name")
// })

// myname.innerText = localStorage.name


// age.innerText = localStorage.age
// ageInput.addEventListener('input',(e)=>{
//     localStorage.setItem("age",e.target.value)
//     age.innerText = localStorage.getItem("age")
// })


// const myData = {
//     name:"mayanka",
//     age:"10"
// }
const myData =  JSON.parse(localStorage.getItem("myData")) || {}
myname.innerText = myData.name
age.innerText = myData.age
nameInput.addEventListener('input',(e)=>{
    myData.name = e.target.value
    
    localStorage.setItem("myData",JSON.stringify(myData))
     myname.innerText = e.target.value
})


ageInput.addEventListener('input',(e)=>{
    myData.age = e.target.value
    
    localStorage.setItem("myData",JSON.stringify(myData))
     age.innerText = e.target.value
})

// const myData = {
//     name: "",
//     age: ""
// };

// nameInput.addEventListener('input', (e) => {
//     myData.name = e.target.value;

//     // Use setItem as a method with parentheses after it
//     localStorage.setItem("myData", JSON.stringify(myData));
// });
