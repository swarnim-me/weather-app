import ApiFormatter from "../utils/ApiFormatter";

class WeatherService {
	constructor(city) {
		this.API_KEY = `SN5SJGK4JA7PP6Z65AQ4QCPJV`;
		this.api = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${this.API_KEY}&contentType=json`;
		this.formatter = new ApiFormatter();
	}

	fetchWeatherData = async () => {
		const response = await fetch(this.api);
		const data = await response.json();
		return this.formatter.formatData(data);
	};

	refactorData() {}
}

export default WeatherService;
