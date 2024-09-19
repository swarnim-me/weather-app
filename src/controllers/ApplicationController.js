import WeatherService from "../services/WeatherService";
import renderController from "./RenderController";

class ApplicationController {
	constructor() {
		this.api = new WeatherService();
		this.changeCity("Bengaluru");
	}

	async changeCity(city) {
		this.api.changeCity(city);
		const response = await this.fetchWeather();
		console.log(response);
		renderController.updateWeather(response);
	}

	fetchWeather() {
		return new Promise((resolve, reject) => {
			this.api
				.fetchWeatherData()
				.then((response) => {
					resolve(response);
				})
				.catch((error) => {
					reject(error);
				});
		});
	}
}

export default new ApplicationController();
