function applySearch(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let searchCityElement = document.querySelector("#search-city");
  searchCityElement.innerHTML = searchInputElement.value;
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", applySearch);
