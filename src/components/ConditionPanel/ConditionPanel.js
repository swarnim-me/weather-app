import "./conditionPanel.css";
import thermometerIcon from "../../assets/icons/thermometer.svg";
import dropletIcon from "../../assets/icons/droplet.svg";
import rainIcon from "../../assets/icons/cloud-rain.svg";
import sunRainIcon from "../../assets/icons/cloud-sun-rain.svg";
import windIcon from "../../assets/icons/wind.svg";
import waveIcon from "../../assets/icons/waves.svg";
import gaugeIcon from "../../assets/icons/gauge.svg";
import cloudIcon from "../../assets/icons/cloud.svg";
import sunIcon from "../../assets/icons/sun.svg";

class ConditionPanel {
	// Template:
	//     <div class="feels-like condition-item">
	//      <img
	//         src="./assets/icons/thermometer.svg"
	//         alt=""
	//         class="condition-icon icon"
	//      />
	//      <p class="condition-title">Feels like</p>
	//      <p class="condition-value">45°C</p>
	//     </div>
	constructor() {
		this.conditionsGridEle = document.querySelector(".conditions-grid");
	}

	updateConditions(data) {
		const conditions = [
			{
				title: "Feels like",
				icon: thermometerIcon,
				value: data.currentDay.feelsLike,
			},
			{
				title: "Humidity",
				icon: dropletIcon,
				value: data.currentDay.humidity,
			},
			{
				title: "Rain Chance",
				icon: rainIcon,
				value: data.currentDay.rainChance,
			},
			{
				title: "Weather Type",
				icon: sunRainIcon,
				value: data.currentDay.weatherType,
			},
			{
				title: "Wind Speed",
				icon: windIcon,
				value: data.currentDay.windSpeed,
			},
			{
				title: "Wind Direction",
				icon: waveIcon,
				value: data.currentDay.windDirection,
			},
			{
				title: "Pressure",
				icon: gaugeIcon,
				value: data.currentDay.pressure,
			},
			{
				title: "Cloud Cover",
				icon: cloudIcon,
				value: data.currentDay.cloudCover,
			},
			{
				title: "UV Index",
				icon: sunIcon,
				value: data.currentDay.uvIndex,
			},
		];
		this.conditionsGridEle.innerHTML = "";
		conditions.forEach((data) => {
			const wrapperEle = document.createElement("div");
			wrapperEle.classList.add("condition-item");

			const iconEle = document.createElement("img");
			iconEle.classList.add("condition-icon", "icon");
			iconEle.src = data.icon;

			const conditionDataEle = document.createElement("div");
			conditionDataEle.classList.add("condition-data");

			const conditionTitleEle = document.createElement("p");
			conditionTitleEle.classList.add("condition-title");
			conditionTitleEle.textContent = data.title;

			const conditionValueEle = document.createElement("p");
			conditionValueEle.classList.add("condition-value");
			conditionValueEle.textContent = data.value ?? "NA";

			conditionDataEle.append(conditionTitleEle, conditionValueEle);

			wrapperEle.append(iconEle, conditionDataEle);

			this.conditionsGridEle.appendChild(wrapperEle);
		});
	}
}

export default new ConditionPanel();
