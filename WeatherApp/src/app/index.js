import "./index.css";
const { Weather } = require("./Weather.js");
const { UI } = require("./UI.js");
const { Store } = require("./Store.js");

const store = new Store();
const { city, countryCode } = store.GetLocationData();

const ui = new UI();
const weather = new Weather(city, countryCode);

async function fetchWeather() {
  const data = await weather.GetWeather();
  ui.render(data);
}

document.getElementById("w-change-btn").addEventListener("click", (e) => {
  const city = document.getElementById("city").value;
  const countryCode = document.getElementById("countryCode").value;
  weather.ChangeLocation(city, countryCode);
  store.SetLocationData(city, countryCode);
  fetchWeather();
  e.preventDefault();
});

document.addEventListener("DOMContentLoaded", fetchWeather);
