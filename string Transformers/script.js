
const input = document.querySelector("input")
const lowerCase = document.querySelector(".lowercase")
const upperCase= document.querySelector(".uppercase")
const camelcase = document.querySelector(".camelcase")
const pascalCase  = document.querySelector(".pascalcase")
const snakeCase = document.querySelector(".snakecase")
const kebabCase = document.querySelector(".kebabcase")
const trim = document.querySelector(".trim")


// lowerCase.innerText = input.value.toLowerCase()
// upperCase.innerText = input.value.toUpperCase()

function toCaptilizeWord(str){
    const firstChar = str[0].toUpperCase() + str.slice(1,str.length)
    return firstChar 
}

function camelCaseFun(string){
    const lowerCaseStr = string.toLowerCase()
    const arrayStr = lowerCaseStr.split(" ")
    const finalArray = arrayStr.map((array,i)=>{
        // console.log(array,i)
        if(i == 0) return array
        return toCaptilizeWord(array)
    })
    return (finalArray.join(''))
}
// camelCaseFun(input.value)

function pascalCaseFun(pascal){
    const lowerCase = pascal.toLowerCase()
    const arrayStr = lowerCase.split(" ")
    // console.log(arrayStr)
    const finalpascal = arrayStr.map((arr)=>{
        return toCaptilizeWord(arr)
    })
    return (finalpascal.join(''))
}
// pascalCase(input.value)

function snakeCaseFun(snake){
   const lowerSnake = snake.toLowerCase()
   const arraySnake = lowerSnake.split(" ")
   //console.log(arraySnake)
   const finalSnake = arraySnake.map((newSnake ,i)=>{
    return newSnake
   })
   return (finalSnake.join('_'))
}


function kababCaseFun(kabab){
    const lowerKabab = kabab.toLowerCase()
    const arrayKabab = lowerKabab.split(" ")
    // console.log(arrayKabab)
    const finalKabab = arrayKabab.map((newKabab,i)=>{
    
        return newKabab
    })
    return finalKabab.join('-')
}
input.addEventListener("input",(e)=>{
    lowerCase.innerText = e.target.value.toLowerCase()
    upperCase.innerText = e.target.value.toUpperCase()
    camelcase.innerText = camelCaseFun(input.value)
    pascalCase.innerText = pascalCaseFun(input.value)
    snakeCase.innerText = snakeCaseFun(input.value)
    kebabCase.innerText = kababCaseFun(input.value)
    trim.innerText = e.target.value.split(" ").join("")
})