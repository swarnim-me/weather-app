import DownArrow from "../../assets/icons/misc/down-arrow.svg";
import UpArrow from "../../assets/icons/misc/up-arrow.svg";
import iconMapper from "../../utils/IconMapper";
import "./weeklyPanel.css";

class WeeklyPanel {
	constructor() {
		this.cardsWrapper = document.querySelector(".week-cards");
	}

	updateWeek(data) {
		this.cardsWrapper.innerHTML = "";
		for (let i = 0; i < 5; i++) {
			this.cardsWrapper.appendChild(this.createCard(data.weeklyData[i]));
		}
	}

	createCard(data) {
		const cardWrapperEle = document.createElement("div");
		cardWrapperEle.classList.add("week-card");

		const cardTitleEle = document.createElement("h1");
		cardTitleEle.textContent = data.day.toString().toLowerCase();
		cardTitleEle.classList.add("week-day");

		const currentWeatherEle = document.createElement("img");
		currentWeatherEle.src = iconMapper.getIcon(data.icon);
		currentWeatherEle.classList.add("day-icon");

		const temperatureEle = document.createElement("h1");
		temperatureEle.textContent = data.temperature + " °C";
		temperatureEle.classList.add("temperature");

		const minmaxWrapper = document.createElement("div");
		minmaxWrapper.classList.add("temperature-minmax");

		const minWrapper = document.createElement("div");
		minWrapper.classList.add("temperature-min");

		const minImgEle = document.createElement("img");
		minImgEle.src = DownArrow;

		const minValueEle = document.createElement("h3");
		minValueEle.textContent = data.temperatureMin;

		minWrapper.append(minImgEle, minValueEle);

		const maxWrapper = document.createElement("div");
		maxWrapper.classList.add("temperature-max");

		const maxImgEle = document.createElement("img");
		maxImgEle.src = UpArrow;

		const maxValueEle = document.createElement("h3");
		maxValueEle.textContent = data.temperatureMax;

		maxWrapper.append(maxImgEle, maxValueEle);

		minmaxWrapper.append(minWrapper, maxWrapper);

		cardWrapperEle.append(
			cardTitleEle,
			currentWeatherEle,
			temperatureEle,
			minmaxWrapper
		);

		return cardWrapperEle;
	}
}

export default new WeeklyPanel();
