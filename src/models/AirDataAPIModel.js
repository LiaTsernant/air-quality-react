class AirDataAPIModel {
  static getDataByZipCode = (zipCode) => {
    fetch(`https://air-quality-data-app.herokuapp.com/api/v1/get_by_zip_code/${zip_code}`).then(res => res.json());
  }

  static getDataByCityName = (cityName) => {
    fetch(`https://air-quality-data-app.herokuapp.com/api/v1/get_by_city_name/${cityName}`).then(res => res.json());
  }
}

export default AirDataAPIModel;