import { initializeWeather } from './initWeather.js';

const apikey = 'f0ac2059eb1d1bf2491b1e3d95aa35b2';

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');
const buttonGeolocation = document.getElementById('button-submit');
const section = document.getElementById('section');
const temperature = document.getElementById('temperature');
const cityResult = document.getElementById('cityResult');
const icon = document.getElementById('icon');
const amsterdam = document.getElementById('amsterdam');
const berlin = document.getElementById('berlin');
const newYork = document.getElementById('newYork');
const paris = document.getElementById('paris');

const url = (city) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

async function getSearchedWeather(city) {
  try {
    const response = await fetch(url(city));

    if (response.status === 200) {
      const respData = await response.json();

      addWeatherToPage(respData);
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

function addWeatherToPage(data) {
  const temp = kelvinToCelsius(data.main.temp);

  const weather = document.createElement('div');
  weather.classList.add('weather');

  const weatherDetails = document.createElement('div');
  weatherDetails.classList.add('weatherDetails');

  weather.innerHTML = `
        <h2> ${temp}°C <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /></h2>
        <small>${data.weather[0].main}</small>
        `;
  //

  weatherDetails.innerHTML = `<`;
  // cleanup
  main.innerHTML = '';

  main.appendChild(weather);
}

// The temperature is given in Kelvin so we have to transform it to Celsius
function kelvinToCelsius(kelvin) {
  return Math.floor(kelvin - 273.15);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const city = search.value;

  if (city) {
    getSearchedWeather(city);
  }
});

//default location weather
getSearchedWeather('London');

//////////////////////////////////////////////////////////

buttonGeolocation.addEventListener('click', getWeatherByUserGeolocation);

////////////////////////////////////////////////////

function getWeatherByUserGeolocation() {
  let long;
  let lat;
  // Accessing Geolocation of User
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      // Storing Longitude and Latitude in variables
      long = position.coords.longitude;
      lat = position.coords.latitude;
      const base = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apikey}`;

      // Using fetch to get data
      fetch(base)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          return addWeatherToPage(data);
        });
    });
  }
}
