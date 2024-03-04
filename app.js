const api_key = "1a0e303bb49a6c4497b9b8d42f0fe3a8";
const api_url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");



async function checkweather(city) {
    const response = await fetch(api_url + city + `&appid = ${api_key}`);
    var data = await response.json;
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "kph";

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "weather-app-images/clouds.png"
    }
    else if (data.weather[0].main == "clear") {
        weatherIcon.src = "weather-app-images/clear.png"
    }
    else if (data.weather[0].main == "rain") {
        weatherIcon.src = "weather-app-images/rain.png"
    }
    else if (data.weather[0].main == "drizzle") {
        weatherIcon.src = "weather-app-images/drizzle.png"
    }
    else if (data.weather[0].main == "mist") {
        weatherIcon.src = "weather-app-images/mist.png"
    }
    document.querySelector(".weather").style.display = "block";
}

searchBtn.addEventListener("click", () => {
    checkweather(searchBox.value);
});


