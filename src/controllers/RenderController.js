import currentPanel from "../components/CurrentPanel/CurrentPanel";
import conditionPanel from "../components/ConditionPanel/ConditionPanel";
import "../components/SearchBar/SearchBar";
import "../components/WeeklyPanel/WeeklyPanel";
import weeklyPanel from "../components/WeeklyPanel/WeeklyPanel";

class RenderController {
	constructor() {}

	updateWeather(data) {
		currentPanel.updateWeather(data);
		conditionPanel.updateConditions(data);
		weeklyPanel.updateWeek(data);
	}
}

export default new RenderController();
