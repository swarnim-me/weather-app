import data from "../data/units.json";
import databaseController from "../controllers/DatabaseController";

class UnitConvertor {
	constructor() {
		this.data = data;
		this.unit = databaseController.getCurrentUnit();
	}

	getCurrentUnits() {
		return data[this.unit];
	}

	getUnits(type) {
		return data[type];
	}
}

export default new UnitConvertor();
