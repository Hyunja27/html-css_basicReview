function geoOk(pos)
{
    const lat = pos.coords.latitude
    const lon = pos.coords.longitude

    const API_KEY = "c06665e4f431ea18ddc00c4f0aa40525"
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    console.log(url)
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const city = document.querySelector("#weather span:first-child")
        const cityWeather = document.querySelector("#weather span:last-child")
        city.innerHTML = "[ " + data.name + " ]"
        cityWeather.innerHTML = data.weather[0].main
    })
}

function geoNotOk()
{
    console.log("navi Not Work.")
}

navigator.geolocation.getCurrentPosition(geoOk,geoNotOk)