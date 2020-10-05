class AirDataAPIModel {
  static getDataByZipCode = (zipCode) => {
    fetch(`https://air-quality-data-app.herokuapp.com/api/v1/get_by_zip_code/${zipCode}`).then(res => res.json());
  }

  static getDataByCityName = (cityName) => {
    // AirNow API doesn't have an option to get data by city name.
    // Need to convert city name to zip code and call getDataByZipCode(...)
  }
}

export default AirDataAPIModel;