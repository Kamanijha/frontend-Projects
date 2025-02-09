
let singUp = document.querySelector('#singUp')
let singIn = document.querySelector('#singIn')
let  nameFiled = document.querySelector('.name-filed')
let title = document.querySelector('.title')
let para = document.querySelector("p span")

console.log(singIn)
singIn.addEventListener('click', ()=>{
    if(nameFiled){
        nameFiled.style.display = 'none'
        title.innerHTML = 'Sing In'
        singIn.style.backgroundColor = 'green'
        singUp.style.backgroundColor = ''
        para.innerHTML = 'Forgot password'
    }
})

singUp.addEventListener('click', ()=>{
    if(nameFiled){
        nameFiled.style.display = 'block'
        title.innerHTML = 'Sing Up'
        singUp.style.backgroundColor = 'green'
        singIn.style.backgroundColor = '';
        para.innerHTML = 'password suggestion'
    }
})

// eye button toggle
document.querySelector(".eye-btn").addEventListener('click',()=>{
    const passwordFiled = document.querySelector("#password")
    const icon = document.querySelector(".eye-btn i")
    if(passwordFiled.type === 'password'){
        passwordFiled.type = 'text'
        icon.classList.remove('fa-eye-slash')
        icon.classList.add('fa-eye')
    }else{
        passwordFiled.type = 'password'
        icon.classList.remove('fa-eye')
        icon.classList.add('fa-eye-slash')
    }
})