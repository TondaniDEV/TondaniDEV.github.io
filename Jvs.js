
function getWeather() {
    const apiKey = "249890ba40f7f49e924f16b1b7fa3290";
    const city = document.getElementById('city').value;

    // Make a request to the OpenWeatherMap API
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            // Handle the response and update the UI
            const weatherInfo = document.getElementById('weather-info');
            weatherInfo.innerHTML = `
                <p>City: ${data.name}</p>
                <p>Temperature: ${data.main.temp} &deg;C</p>
                <p>Weather: ${data.weather[0].description}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}























































