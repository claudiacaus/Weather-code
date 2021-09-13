const apikey = 'f0ac2059eb1d1bf2491b1e3d95aa35b2';

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

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

  weather.innerHTML = `
        <h2><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /> ${temp}°C <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /></h2>
        <small>${data.weather[0].main}</small>
    `;

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

function getWeatherByUserGeolocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert(
      "Your locations isn't available to us and we can't show the weather data.",
    );
  }
  function showPosition(positions) {
    let lat = positions.coords.latitude;
    let lon = positions.coords.longitude;

    console.log(lat, lon);
    showData(lat, lon);
  }
}

function showData(latitude, longitude) {
  const api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}`;
  console.log(api);
  retData(api);
}

async function retData(api) {
  const apiGeo = await fetch(api);
  const dataApi = await apiGeo.json();
  console.log(dataApi);

  showRes(dataApi);
}

function showRes(dataWeather) {
  const { main } = dataWeather;
  console.log(dataWeather);
}
