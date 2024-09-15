import "./styles.css";
import WeatherService from "./services/WeatherService";

const api = new WeatherService("Paris");

api.fetchWeatherData()
	.then((response) => {
		console.log(response);
	})
	.catch((error) => {
		console.log(new Error(error));
	});
