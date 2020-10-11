class AirDataAPIModel {
  static getDataByZipCode = (zipCode) => {    
    return fetch(`http://localhost:4000/api/v1/getAirQualityDataByZipCode/${zipCode}`)
      .then(res => res.json())
  }
}

export default AirDataAPIModel;