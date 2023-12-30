const apiKey = 'fb90594d3caa1f8bc3b9c0a1aa4e8d99';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchButton');
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');
const img = document.getElementById('img');

searchButton.addEventListener('click', () => {
    const location = locationInput.value;
    if (location) {
        fetchWeather(location);
    }
});

function fetchWeather(location) {
    const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            locationElement.textContent = data.name;
            temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
            descriptionElement.textContent = data.weather[0].description;

            img.classList.add("active")
            switch (data.weather[0].main) {
                case "Clouds":
                    img.style.backgroundImage="url(img/cloudy.png";
                    break;
                
                case "Clear":
                    img.style.backgroundImage="url(img/sun.png";
                    break;

                case "Snow":
                    img.style.backgroundImage="url(img/snow.png";
                    break;

                case "Rain":
                    img.style.backgroundImage="url(img/rainy.png";
                    break;

                case "Drizzle":
                    img.style.backgroundImage="url(img/rainy.png";
                    break;

                case "Thunderstorm":
                    img.style.backgroundImage="url(img/storm.png";
                    break;
                default:
                    break;
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

