import "./currentPanel.css";

class CurrentPanel {
	constructor() {
		this.currentPanelEle = document.querySelector(".current-panel");
		this.cityEle = document.querySelector(".current-panel .city");
		this.temperatureEle = document.querySelector(
			".current-panel .temperature-wrapper .temperature"
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
		this.temperatureEle.textContent = data.currentDay.temperature + "°C";
		this.conditionsEle.textContent = data.currentDay.description;
		this.dateEle.textContent = data.currentDay.date;
	}
}

export default new CurrentPanel();
