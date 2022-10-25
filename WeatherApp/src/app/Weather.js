export class Weather {
  constructor(city, countryCode) {
    this.apiKey = "db80b9c7ae53d7f484b265ce8e4c5fab";
    this.city = city;
    this.countryCode = countryCode;
  }

  async GetWeather() {
    const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apiKey}&units=metric`;
    const response = await fetch(URI);
    const data = await response.json();
    return data;
  }

  ChangeLocation(city, countryCode) {
    this.city = city;
    this.countryCode = countryCode;
  }
}
