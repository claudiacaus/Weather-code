// const weatherContainer = createDOMElement('div');

// document.getElementById('app').innerHTML = `
// <h1>Let's See the Weather</h1>
// <div id="monica">
// </div>
// `;
// const weatherResult = document.getElementById('weather-result');
// weatherResult.style.color = 'white';
// const input = document.createElement('input');
// input.setAttribute('placeholder', 'Search new location');
// weatherResult.appendChild(input);
// const button = document.createElement('button');
// weatherResult.appendChild(button);

// const results = document.createElement('div');
// weatherResult.appendChild(results);
// button.innerText = 'Search';

// const handleData = (data) => {
//   console.log(data);
//   const title = document.createElement('h2');
//   title.innerText = 'Here is the weather in: ' + data.name;
//   results.appendChild(title);
//   const temp = document.createElement('p');
//   temp.innerText = 'Temperature: ' + data.main.temp + ' degrees F';
//   if (Number(data.main.temp) > 70) {
//     temp.style.color = 'pink';
//   }
//   results.appendChild(temp);
//   const info = data.weather[0].description;
//   const infoelem = document.createElement('p');
//   infoelem.innerText = info;
//   results.appendChild(infoelem);
// };
// const handleSearch = () => {
//   const searchValue = input.value;
//   const myRequest = new Request(
//     `https://api.openweathermap.org/data/2.5/weather?zip=${searchValue},us&appid=4cd8ae5311f49a5b4b5351770b5821c0&units=imperial`,
//   );
//   fetch(myRequest).then((response) => {
//     console.log(response);
//     // results.innerHTML = "";
//     // if (response.status === 200) {
//     response.json().then((data) => handleData(data));
//     // } else {
//     // throw new Error(`Error:${response.status} ${response.statusText}`);
//     // }
//   });
//   // .catch((e) => {
//   //   const errorText = document.createElement("p");
//   //   errorText.innerText = e;
//   //   results.appendChild(errorText);
//   // });
// };
// button.addEventListener('click', handleSearch);
