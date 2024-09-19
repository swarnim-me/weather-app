import currentPanel from "../components/CurrentPanel/CurrentPanel";
import "../components/SearchBar/SearchBar";

class RenderController {
	constructor() {}

	updateWeather(data) {
		currentPanel.updateWeather(data);
	}
}

export default new RenderController();
