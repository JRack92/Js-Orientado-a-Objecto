import './index.css';
const { Weather } = require('./Weather.js');

const weather = new Weather('London', 'uk');

async function fetchWeather() {
    const data = await weather.GetWeather();
    console.log(data);
}

document.addEventListener('DOMContentLoaded', fetchWeather);