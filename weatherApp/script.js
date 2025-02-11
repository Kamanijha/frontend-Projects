
const btn = document.querySelector("button")
const weather = document.querySelector("#weather")

const weatherData = async () => {
    const apiKey = ""  // api key
    let URL = `https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=${apiKey}&units=metric`

    try {
        const response = await fetch(URL)
        const finalData = await response.json()
        console.log(finalData)

        const cityName = finalData.name
        const nameElement = document.createElement('h2')
        nameElement.innerHTML = `city name is ${cityName}`

        const temp = finalData.main.temp
        const tempElement = document.createElement('h2')
        tempElement.innerHTML = `temprature is ${temp}°C`

        const humidity = finalData.main.humidity
        const humidityElement = document.createElement('h2')
        humidityElement.innerHTML = `humidity is : ${humidity}%`

        const windSpeed = finalData.wind.speed
        const windElement = document.createElement('h2')
        windElement.innerHTML = `wind speed is : ${windSpeed}km/h`

        weather.innerHTML = ''
        weather.appendChild(tempElement)
        weather.appendChild(nameElement)
        weather.appendChild(humidityElement)
        weather.appendChild(windElement)
    }
    catch (error) {
        console.log("something went wrong")
    }
}
