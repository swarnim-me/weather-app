import toast from "../components/ToastMessage/ToastMessage";
import WeatherService from "../services/WeatherService";
import renderController from "./RenderController";

class ApplicationController {
	constructor() {
		this.api = new WeatherService();
		this.changeCity("Bengaluru");
	}

	async changeCity(city) {
		this.api.changeCity(city);

		try {
			const response = await this.fetchWeather();
			renderController.updateWeather(response);
			toast.makeToast({
				type: "success",
				title: "Success",
				message: "Data fetched successfully",
			});
		} catch (error) {
			toast.makeToast({
				type: "error",
				title: "Error",
				message: "Error happened while fetching API",
			});
			console.log(error);
		}
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
