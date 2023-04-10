import { API_KEY } from "./config.js";
const container = document.querySelector(".container");
const searchButton = document.querySelector(".search-box button");
const weatherBox = document.querySelector(".weather-box");
const weatherDetails = document.querySelector(".weather-details");
const notFoundMessage = document.querySelector(".not-found");

searchButton.addEventListener("click", searchWeather);

function searchWeather() {
  const cityInput = document.querySelector(".search-box input");
  const city = cityInput.value;

  if (!city) return;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
  )
    .then((response) => response.json())
    .then((weatherData) => {
      if (weatherData.cod === "404") {
        showNotFoundMessage();
        return;
      }

      hideNotFoundMessage();
      updateWeatherDisplay(weatherData);
    });
}

function showNotFoundMessage() {
  container.style.height = "400px";
  weatherBox.style.display = "none";
  weatherDetails.style.display = "none";
  notFoundMessage.style.display = "block";
  notFoundMessage.classList.add("fadeIn");
}

function hideNotFoundMessage() {
  notFoundMessage.style.display = "none";
  notFoundMessage.classList.remove("fadeIn");
}

function updateWeatherDisplay(weatherData) {
  const weatherImage = document.querySelector(".weather-box img");
  const temperature = document.querySelector(".weather-box .temperature");
  const description = document.querySelector(".weather-box .description");
  const humidity = document.querySelector(".weather-details .humidity span");
  const wind = document.querySelector(".weather-details .wind span");

  switch (weatherData.weather[0].main) {
    case "Clear":
      weatherImage.src = "../assets/img/clearWeather.png";
      break;
    case "Rain":
      weatherImage.src = "../assets/img/rainWeather.png";
      break;
    case "Snow":
      weatherImage.src = "../assets/img/snowWeather.png";
      break;
    case "Clouds":
      weatherImage.src = "../assets/img/cloudWeather.png";
      break;
    case "Haze":
    case "Smoke":
      weatherImage.src = "../assets/img/mistWeather.png";
      break;
    default:
      weatherImage.src = "";
  }

  temperature.innerHTML = `${parseInt(weatherData.main.temp)}<span>°C</span>`;
  description.innerHTML = `${weatherData.weather[0].description}`;
  humidity.innerHTML = `${weatherData.main.humidity}%`;
  wind.innerHTML = `${parseInt(weatherData.wind.speed)}Km/h`;

  weatherBox.style.display = "";
  weatherDetails.style.display = "";
  weatherBox.classList.add("fadeIn");
  weatherDetails.classList.add("fadeIn");

  container.style.height = "590px";
}
