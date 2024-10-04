import "./spinner.css";
import spinnerIcon from "../../assets/icons/weather/cloudy.svg";

class Spinner {
	constructor() {
		this.spinner = this.createSpinner();
		this.mainEle = document.querySelector("main");
		this.mainEle.appendChild(this.spinner);
		this.hideSpinner();
	}

	createSpinner() {
		const cardEle = document.createElement("div");
		cardEle.classList.add("spinner-wrapper");
		const iconEle = document.createElement("img");
		iconEle.classList.add("spinner");
		iconEle.src = spinnerIcon;
		cardEle.appendChild(iconEle);
		return cardEle;
	}

	showSpinner() {
		this.spinner.style.display = "grid";
	}

	hideSpinner() {
		this.spinner.style.display = "none";
	}
}

export default new Spinner();
