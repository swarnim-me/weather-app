import toast from "../components/ToastMessage/ToastMessage";
import WeatherService from "../services/WeatherService";
import renderController from "./RenderController";
import databaseController from "./DatabaseController";

class ApplicationController {
	constructor() {
		this.api = new WeatherService();
		this.city = "Bengaluru";
		this.changeCity();
		renderController.updateSettings(databaseController.getActiveDb());
		renderController.updateTheme(databaseController.getActiveDb());
	}

	updateDb(data) {
		databaseController.updateDb(data);
	}

	updateCity(city) {
		this.city = city;
		this.changeCity();
	}

	async changeCity() {
		this.api.changeCity(this.city);
		this.api.changeUnit(databaseController.getCurrentUnit());
		renderController.showSpinner();
		try {
			const response = await this.fetchWeather();
			console.log(response);
			renderController.updateWeather(response);
			toast.makeToast({
				type: "success",
				title: "Success",
				message: "Data fetched successfully",
			});
			return response;
		} catch {
			toast.makeToast({
				type: "error",
				title: "Error",
				message: "Error happened while fetching API",
			});
		} finally {
			renderController.hideSpinner();
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
