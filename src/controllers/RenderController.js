import currentPanel from "../components/CurrentPanel/CurrentPanel";
import conditionPanel from "../components/ConditionPanel/ConditionPanel";
import "../components/SearchBar/SearchBar";

class RenderController {
	constructor() {}

	updateWeather(data) {
		currentPanel.updateWeather(data);
		conditionPanel.updateConditions(data);
	}
}

export default new RenderController();
