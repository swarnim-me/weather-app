import ApiFormatter from "../utils/ApiFormatter";

class WeatherService {
	constructor(city) {
		this.city = city;
		this.API_KEY = `SN5SJGK4JA7PP6Z65AQ4QCPJV`;
		this.api = this.buildApiString(city);
		this.formatter = new ApiFormatter();
	}

	fetchWeatherData = async () => {
		const response = await fetch(this.api);
		const data = await response.json();
		return this.formatter.formatData(data);
	};

	changeCity(city) {
		this.city = city;
		this.api = this.buildApiString();
	}

	buildApiString() {
		return `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${this.city}?unitGroup=metric&key=${this.API_KEY}&contentType=json`;
	}
}

export default WeatherService;
