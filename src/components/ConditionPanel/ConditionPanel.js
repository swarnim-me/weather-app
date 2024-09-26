import "./conditionPanel.css";
import thermometerIcon from "../../assets/icons/conditions/thermometer.svg";
import dropletIcon from "../../assets/icons/conditions/droplet.svg";
import rainIcon from "../../assets/icons/conditions/cloud-rain.svg";
import visibilityIcon from "../../assets/icons/conditions/visibility.svg";
import windIcon from "../../assets/icons/conditions/wind.svg";
import waveIcon from "../../assets/icons/conditions/waves.svg";
import gaugeIcon from "../../assets/icons/conditions/gauge.svg";
import cloudIcon from "../../assets/icons/conditions/cloud.svg";
import unitConvertor from "../../utils/UnitConvertor";
import dewIcon from "../../assets/icons/conditions/dew.svg";

class ConditionPanel {
	constructor() {
		this.conditionsGridEle = document.querySelector(".conditions-grid");
	}

	updateConditions(data) {
		const units = unitConvertor.getCurrentUnits();
		const conditions = [
			{
				title: "Feels like",
				icon: thermometerIcon,
				value: data.currentDay.feelsLike,
				unit: " " + units.temperature,
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
				unit: " %",
			},
			{
				title: "Visibility",
				icon: visibilityIcon,
				value: data.currentDay.visibility,
				unit: " " + units.visibility,
			},
			{
				title: "Wind Speed",
				icon: windIcon,
				value: data.currentDay.windSpeed,
				unit: " " + units.wind,
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
				unit: " " + units.pressure,
			},
			{
				title: "Cloud Cover",
				icon: cloudIcon,
				value: data.currentDay.cloudCover,
			},
			{
				title: "Dew",
				icon: dewIcon,
				value: data.currentDay.dew,
			},
		];
		this.conditionsGridEle.innerHTML = "";
		conditions.forEach((data) => {
			const wrapperEle = document.createElement("div");
			wrapperEle.classList.add("condition-item");

			const iconEle = document.createElement("img");
			iconEle.classList.add("condition-icon");
			iconEle.src = data.icon;

			const conditionDataEle = document.createElement("div");
			conditionDataEle.classList.add("condition-data");

			const conditionTitleEle = document.createElement("p");
			conditionTitleEle.classList.add("condition-title");
			conditionTitleEle.textContent = data.title;

			const conditionValueEle = document.createElement("p");
			conditionValueEle.classList.add("condition-value");
			conditionValueEle.textContent = data.value ?? "NA";

			const unitEle = document.createElement("span");
			unitEle.classList.add("unit");
			unitEle.textContent = data.unit ?? "";

			conditionValueEle.appendChild(unitEle);

			conditionDataEle.append(conditionTitleEle, conditionValueEle);

			wrapperEle.append(iconEle, conditionDataEle);

			this.conditionsGridEle.appendChild(wrapperEle);
		});
	}
}

export default new ConditionPanel();
