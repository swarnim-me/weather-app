import iconMapper from "../../utils/IconMapper";
import "./hourlyPanel.css";
import unitConvertor from "../../utils/UnitConvertor";

class HourlyPanel {
	constructor() {
		this.wrapperEle = document.querySelector(".hour-cards");
	}

	updateHours(data) {
		const margin = 4;
		const now = new Date().getHours();
		let startIndex = now - margin;
		let endIndex = now + margin;

		if (startIndex < 0) {
			endIndex -= startIndex;
			startIndex = 0;
		} else if (endIndex > 23) {
			startIndex -= endIndex - 23;
			endIndex = 23;
		}
		this.wrapperEle.innerHTML = "";
		let isActive = false;
		for (let i = startIndex; i <= endIndex; i += 1) {
			if (i === now) isActive = true;
			else isActive = false;
			this.wrapperEle.appendChild(
				this.createHourCard(data.currentDay.hourlyData[i], isActive)
			);
		}
	}

	convertHoursTo12Hour(hours24) {
		// Convert hours from string to number
		let hours = parseInt(hours24, 10);

		// Determine the AM/PM period
		const period = hours >= 12 ? "PM" : "AM";

		// Convert hours to 12-hour format
		hours = hours % 12 || 12; // If hours is 0 or 12, show 12 instead of 0

		// Format the 12-hour time with the period
		return `${hours} ${period}`;
	}

	createHourCard(data, isActive) {
		const unit = " " + unitConvertor.getCurrentUnits().temperature;
		const hourCardEle = document.createElement("div");
		hourCardEle.classList.add("hour-card");

		const weatherImgEle = document.createElement("img");
		weatherImgEle.classList.add("hour-weather");
		weatherImgEle.src = iconMapper.getIcon(data.icon);

		// const hourDataEle = document.createElement("div");
		// hourDataEle.classList.add("hour-data");

		const hourTimeEle = document.createElement("h3");
		hourTimeEle.classList.add("hour-time");
		if (isActive) hourTimeEle.classList.add("active");
		hourTimeEle.textContent = this.convertHoursTo12Hour(data.time);

		const temperatureEle = document.createElement("h3");
		temperatureEle.classList.add("temperature");
		temperatureEle.textContent = data.temp + unit;

		hourCardEle.append(weatherImgEle, hourTimeEle, temperatureEle);

		return hourCardEle;
	}
}

export default new HourlyPanel();
