const api_key = "1a0e303bb49a6c4497b9b8d42f0fe3a8";
const api_url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";
async function checkweather() {
    const response = await fetch(api_url + `&appid = ${api_key}`);
    var data = await response.json;
    console.log(data);
}
checkweather();

