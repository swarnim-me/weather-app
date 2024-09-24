class DatabaseController {
	constructor() {
		if (!localStorage.getItem("data")) {
			localStorage.setItem(
				"data",
				JSON.stringify({
					theme: "light",
					unit: "metric",
				})
			);
		}
	}

	getActiveDb() {
		return JSON.parse(localStorage.getItem("data"));
	}

	getCurrentUnit() {
		return this.getActiveDb().unit;
	}
}

export default new DatabaseController();
