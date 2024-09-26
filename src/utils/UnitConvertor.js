import data from "../data/units.json";
import databaseController from "../controllers/DatabaseController";

class UnitConvertor {
	getCurrentUnits() {
		return data[databaseController.getCurrentUnit()];
	}

	getUnits(type) {
		return data[type];
	}
}

export default new UnitConvertor();
