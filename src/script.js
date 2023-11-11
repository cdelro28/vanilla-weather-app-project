function updateWeatherData(response) {
  let tempValueElement = document.querySelector("#temp-value");
  let cityElement = document.querySelector("#search-city");
  let decriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windSpeedElement = document.querySelector("#wind-speed");
  tempValueElement.innerHTML = Math.round(response.data.temperature.current);
  cityElement.innerHTML = response.data.city;
  decriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;
}

function searchCity(city) {
  let apiKey = "ba054cd6f15a15c42o3b84c5df16bbtf";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateWeatherData);
}

function applySearch(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  searchCity(searchInputElement.value);
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", applySearch);

searchCity("Seattle");
