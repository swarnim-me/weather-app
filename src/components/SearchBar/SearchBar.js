import "./searchbar.css";
import applicationController from "../../controllers/ApplicationController";

class SearchBar {
	constructor() {
		this.locationInputEle = document.querySelector(".location-input");
		this.searchBtn = document.querySelector(".search-btn");
		this.bindEvents();
	}

	bindEvents() {
		this.searchBtn.addEventListener("click", (event) => {
			event.preventDefault();
			const searchLocation = this.locationInputEle.value;
			this.locationInputEle.value = "";
			if (searchLocation && searchLocation.length != 0) {
				applicationController.updateCity(searchLocation);
			}
		});
	}
}

export default new SearchBar();
