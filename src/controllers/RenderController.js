import currentPanel from "../components/CurrentPanel/CurrentPanel";
import conditionPanel from "../components/ConditionPanel/ConditionPanel";
import hourlyPanel from "../components/HourlyPanel/HourlyPanel";
import weeklyPanel from "../components/WeeklyPanel/WeeklyPanel";
import settings from "../components/Settings/Settings";
import "../components/SearchBar/SearchBar";
import "../components/WeeklyPanel/WeeklyPanel";
import applicationController from "./ApplicationController";
import spinner from "../components/Spinner/Spinner";

class RenderController {
	constructor() {
		this.body = document.body;
	}

	updateWeather(data) {
		currentPanel.updateWeather(data);
		conditionPanel.updateConditions(data);
		weeklyPanel.updateWeek(data);
		hourlyPanel.updateHours(data);
	}

	updateSettings(data) {
		settings.updateSettings(data);
	}

	updateTheme(data) {
		if (data.theme === "dark") {
			this.body.classList.add("dark-mode");
		} else {
			this.body.classList.remove("dark-mode");
		}
	}

	showSpinner() {
		spinner.showSpinner();
	}

	hideSpinner() {
		spinner.hideSpinner();
	}

	async updateDb(data) {
		applicationController.updateDb(data);
		const weatherData = await applicationController.changeCity();
		this.updateTheme(data);
		this.updateWeather(weatherData);
	}
}

export default new RenderController();
