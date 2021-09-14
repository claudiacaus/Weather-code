import { initializeWeather } from './initWeather.js';

const apikey = 'f0ac2059eb1d1bf2491b1e3d95aa35b2';

const body = document.querySelector('body');
const card = document.getElementById('card');
const form = document.getElementById('form');
const search = document.getElementById('search');
const buttonGeolocation = document.getElementById('button-submit');
const temperature = document.getElementById('temperature');
const cityResult = document.getElementById('cityResult');
const icon = document.getElementById('icon');
const description = document.getElementById('description');
const cloudsValue = document.getElementById('cloudsValue');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');

const amsterdam = document.getElementById('amsterdam');
const berlin = document.getElementById('berlin');
const newYork = document.getElementById('newYork');
const paris = document.getElementById('paris');

/////////////////////////////////////////////////

const url = (city) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

async function getCityWeather(city) {
  try {
    const response = await fetch(url(city));

    if (response.status === 200) {
      const respData = await response.json();

      addWeatherToPage(respData);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

function addWeatherToPage(data) {
  const temp = kelvinToCelsius(data.main.temp);

  // const weather = document.createElement('div');
  // weather.classList.add('weather');

  // const weatherDetails = document.createElement('div');
  // weatherDetails.classList.add('weatherDetails');

  // weather.innerHTML = `
  //       <h2> ${temp}°C <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /></h2>
  //       <small>${data.weather[0].main}</small>
  //       `;
  //

  temperature.innerHTML = `${temp}°C`;
  cityResult.innerHTML = `${data.name} `;
  //icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png/" />`;
  description.innerHTML = `${data.weather[0].description}`;
  cloudsValue.innerHTML = `${data.clouds.all}%`;
  humidity.innerHTML = `${data.main.humidity}%`;
  wind.innerHTML = `${data.wind.speed}km/h`;

  if (data.weather[0].icon === '01d') {
    icon.src = './assets/icons/01d.png';
    document.body.style.backgroundImage = `url('./assets/imgweather/image01d.jpg')`;
    card.style.backgroundImage = `url('./assets/imgweather/image01d.jpg')`;
  }
  if (data.weather[0].icon === '01n') {
    icon.src = './assets/icons/01n.png';
    document.body.style.backgroundImage = `url('./assets/imgweather/image01n.jpg')`;
    card.style.backgroundImage = `url('./assets/imgweather/image01n.jpg')`;
  }
  if (data.weather[0].icon === '02d') {
    icon.src = './assets/icons/02d.png';
    document.body.style.backgroundImage = `url('./assets/imgweather/image02d.jpeg')`;
    card.style.backgroundImage = `url('./assets/imgweather/image02d.jpeg')`;
  }
  if (data.weather[0].icon === '02n') {
    icon.src = './assets/icons/02n.png';
    document.body.style.backgroundImage = `url('./assets/imgweather/image02n.jpg')`;
    card.style.backgroundImage = `url('./assets/imgweather/image02n.jpg')`;
  }
  if (data.weather[0].icon === '03d') {
    icon.src = './assets/icons/03d.png';
    document.body.style.backgroundImage = `url('./assets/imgweather/image03d.jpg')`;
    card.style.backgroundImage = `url('./assets/imgweather/image03d.jpg')`;
  }
  if (data.weather[0].icon === '03n') {
    icon.src = './assets/icons/03n.png';
    document.body.style.backgroundImage = `url('./assets/imgweather/image03n.jpg')`;
    card.style.backgroundImage = `url('./assets/imgweather/image03n.jpg')`;
  }
  if (data.weather[0].icon === '04d') {
    icon.src = './assets/icons/04d.png';
    document.body.style.backgroundImage = `url('./assets/imgweather/image04d.jpg')`;
    card.style.backgroundImage = `url('./assets/imgweather/image04d.jpg')`;
  }
  if (data.weather[0].icon === '04n') {
    icon.src = './assets/icons/04n.png';
    document.body.style.backgroundImage = `url('./assets/imgweather/image04n.jpg')`;
    card.style.backgroundImage = `url('./assets/imgweather/image04n.jpg')`;
  }
  if (data.weather[0].icon === '09d') {
    icon.src = './assets/icons/09d.png';
    document.body.style.backgroundImage = `url('./assets/imgweather/image09d.jpg')`;
    card.style.backgroundImage = `url('./assets/imgweather/image09d.jpg')`;
  }
  if (data.weather[0].icon === '09n') {
    icon.src = './assets/icons/09n.png';
    document.body.style.backgroundImage = `url('./assets/imgweather/image09n.jpg')`;
    card.style.backgroundImage = `url('./assets/imgweather/image09n.jpg')`;
  }
  if (data.weather[0].icon === '10d') {
    icon.src = './assets/icons/10d.png';
    document.body.style.backgroundImage = `url('./assets/imgweather/image10d.jpg')`;
    card.style.backgroundImage = `url('./assets/imgweather/image10d.jpg')`;
  }
  if (data.weather[0].icon === '10n') {
    icon.src = './assets/icons/10n.png';
    document.body.style.backgroundImage = `url('./assets/imgweather/image10n.jpg')`;
    card.style.backgroundImage = `url('./assets/imgweather/image10n.jpg')`;
  }
  if (data.weather[0].icon === '11d') {
    icon.src = './assets/icons/11d.png';
    document.body.style.backgroundImage = `url('./assets/imgweather/image11d.jpg')`;
    card.style.backgroundImage = `url('./assets/imgweather/image11d.jpg')`;
  }
  if (data.weather[0].icon === '11n') {
    icon.src = './assets/icons/11n.png';
    document.body.style.backgroundImage = `url('./assets/imgweather/image11n.jpg')`;
    card.style.backgroundImage = `url('./assets/imgweather/image11n.jpg')`;
  }
  if (data.weather[0].icon === '13d') {
    icon.src = './assets/icons/13d.png';
    document.body.style.backgroundImage = `url('./assets/imgweather/image13d.jpg')`;
    card.style.backgroundImage = `url('./assets/imgweather/image13d.jpg')`;
  }
  if (data.weather[0].icon === '13n') {
    icon.src = './assets/icons/13n.png';
    document.body.style.backgroundImage = `url('./assets/imgweather/image13n.jpg')`;
    card.style.backgroundImage = `url('./assets/imgweather/image13n.jpg')`;
  }
  if (data.weather[0].icon === '50d') {
    icon.src = './assets/icons/50d.png';
    document.body.style.backgroundImage = `url('./assets/imgweather/image50f.jpg')`;
    card.style.backgroundImage = `url('./assets/imgweather/image50d.jpg')`;
  }
  if (data.weather[0].icon === '50n') {
    icon.src = './assets/icons/50n.png';
    document.body.style.backgroundImage = `url('./assets/imgweather/image50n.png')`;
    card.style.backgroundImage = `url('./assets/imgweather/image50n.png')`;
  }

  // cleanup

  //main.innerHTML = '';

  //main.appendChild(weather);
}

// The temperature is given in Kelvin so we have to transform it to Celsius
function kelvinToCelsius(kelvin) {
  return Math.floor(kelvin - 273.15);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const city = search.value;

  if (city) {
    getCityWeather(city);
  }
});

function getIconAndImage() {}

//default location weather
getCityWeather('London');

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

// amsterdam.addEventListener('click', getCityWeather('amsterdam'));
// berlin.addEventListener('click', getCityWeather('berlin'));
// newYork.addEventListener('click', getCityWeather('new york'));
// paris.addEventListener('click', getCityWeather('paris'));
