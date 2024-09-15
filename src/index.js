import "./styles.css";
import WeatherService from "./services/WeatherService";

const api = new WeatherService();

api.fetchWeatherData("Paris")
	.then((response) => {
		console.log(response);
	})
	.catch((error) => {
		console.log(new Error(error));
	});
