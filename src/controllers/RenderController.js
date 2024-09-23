import currentPanel from "../components/CurrentPanel/CurrentPanel";
import conditionPanel from "../components/ConditionPanel/ConditionPanel";
import hourlyPanel from "../components/HourlyPanel/HourlyPanel";
import weeklyPanel from "../components/WeeklyPanel/WeeklyPanel";
import "../components/SearchBar/SearchBar";
import "../components/WeeklyPanel/WeeklyPanel";

class RenderController {
	constructor() {}

	updateWeather(data) {
		currentPanel.updateWeather(data);
		conditionPanel.updateConditions(data);
		weeklyPanel.updateWeek(data);
		hourlyPanel.updateHours(data);
	}
}

export default new RenderController();
