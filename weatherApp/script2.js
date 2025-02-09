
const input = document.getElementById("input-box")
const button = document.getElementById("btn")

// async function getData(cityName){
//     const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=88cd81159d7d453aaf793146251101&q=${cityName}&aqi=yes`)

//     return await promise.json()
// }


// button.addEventListener('click',async ()=>{
//     let value = input.value
//     let result = await getData(value)
//     console.log(result)
// })

const userLocation = document.getElementById('locaton')

function gotLocation(position){
    console.log(position)
}

function gotFaild(){
    console.log('there was some issue')
}
userLocation.addEventListener('click',async ()=>{
    navigator.geolocation.getCurrentPosition(gotLocation,gotFaild)
})