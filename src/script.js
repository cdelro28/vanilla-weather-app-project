alert(
  "This pops up when the page is refreshed. the prevent default code is not working. This page is still in a working progress.Thank you for visiting my page"
);

function applySearch(event) {
  event.preventDefault(); // why is this not working? There is no console issues.
  let searchInputElement = document.querySelector("#search-input");
  console.log(searchInputElement.value);
  let searchCityElement = document.querySelector("#search-city");
  searchCityElement.innerHTML = searchInputElement.value;
  console.log(searchCityElement);
}

let searchButton = document.querySelector("#search-button");
searchButton.addEventListener("submit", applySearch);
