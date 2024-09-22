import "./currentPanel.css";
import iconMapper from "../../utils/IconMapper";

class CurrentPanel {
	constructor() {
		this.currentPanelEle = document.querySelector(".current-panel");
		this.cityEle = document.querySelector(".current-panel .city");
		this.temperatureEle = document.querySelector(
			".current-panel .temperature-wrapper .temperature"
		);
		this.temperatureMinEle = document.querySelector(
			".current-panel .temperature-wrapper .temperature-min h3"
		);
		this.temperatureMaxEle = document.querySelector(
			".current-panel .temperature-wrapper .temperature-max h3"
		);
		this.temperatureIconEle = document.querySelector(
			".current-panel .temperature-wrapper img"
		);
		this.conditionsEle = document.querySelector(
			".current-panel .conditions"
		);
		this.dateEle = document.querySelector(".current-panel .date");
		// this.currentPanelEle.textContent = "Hello, world";
	}

	updateWeather(data) {
		this.cityEle.textContent = data.location;
		this.temperatureEle.textContent = data.currentDay.temperature + " °C";
		this.temperatureMinEle.textContent = data.weeklyData[0].temperatureMin
			.toString()
			.toLowerCase();
		this.temperatureMaxEle.textContent = data.weeklyData[0].temperatureMax;
		this.conditionsEle.textContent = data.currentDay.description;
		this.temperatureIconEle.src = iconMapper.getIcon(data.currentDay.icon);
		this.dateEle.textContent = data.currentDay.date;
	}
}

export default new CurrentPanel();
