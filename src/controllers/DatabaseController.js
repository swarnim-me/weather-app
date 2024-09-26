class DatabaseController {
	constructor() {
		if (!localStorage.getItem("weatherAppData")) {
			localStorage.setItem(
				"weatherAppData",
				JSON.stringify({
					theme: "light",
					unit: "metric",
				})
			);
		}
	}

	getActiveDb() {
		return JSON.parse(localStorage.getItem("weatherAppData"));
	}

	updateDb(data) {
		localStorage.setItem("weatherAppData", JSON.stringify(data));
	}

	getCurrentUnit() {
		return this.getActiveDb().unit;
	}
}

export default new DatabaseController();
