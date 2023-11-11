function updateWeatherData(response) {
  console.log(response);
}

function searchCity(city) {
  let apiKey = "ba054cd6f15a15c42o3b84c5df16bbtf";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateWeatherData);
}

function applySearch(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let searchCityElement = document.querySelector("#search-city");
  searchCityElement.innerHTML = searchInputElement.value;
  searchCity(searchInputElement.value);
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", applySearch);
