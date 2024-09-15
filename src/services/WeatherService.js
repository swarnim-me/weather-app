class WeatherService {
	constructor(city) {
		this.API_KEY = `SN5SJGK4JA7PP6Z65AQ4QCPJV`;
		this.api = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=SN5SJGK4JA7PP6Z65AQ4QCPJV&contentType=json`;
	}

	fetchWeatherData = async () => {
		const response = await fetch(this.api);
		const data = await response.json();
		return data;
	};
}

export default WeatherService;
