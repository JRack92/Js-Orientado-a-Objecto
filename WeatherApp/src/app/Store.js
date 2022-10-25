export class Store {
  constructor() {
    this.city;
    this.countryCode;
    this.defaultCity = "Bucaramanga";
    this.defaultCountryCode = "co";
  }

  SetLocationData(city, countryCode) {
    //Esto nos sirve para guardar un valor en cache del navegado y poder ser usado la siguiente vez que se requiera.
    localStorage.setItem("city", city);
    localStorage.setItem("countryCode", countryCode);
  }

  GetLocationData() {
    const city_Ls = localStorage.getItem("city");
    const cc_Ls = localStorage.getItem("countryCode");

    //Verificamos si el valor traidos es nulo y si lo es agregamos el valor por defecto
    if (city_Ls === null) {
      this.city = this.defaultCity;
    } else {
      this.city = city_Ls;
    }

    //Verificamos si el valor traidos es nulo y si lo es agregamos el valor por defecto
    if (cc_Ls === null) {
      this.countryCode = this.defaultCountryCode;
    } else {
      this.countryCode = cc_Ls;
    }

    return {
      city: this.city,
      countryCode: this.countryCode,
    };
  }
}

//El localStorage nos sirve como los datos guardado localmente como si nombre lo dice, para ser usado todas las veces que se desee hasta que sean borradas del cache.
