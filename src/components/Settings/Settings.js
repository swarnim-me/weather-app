import renderController from "../../controllers/RenderController";
import "./settings.css";

class Settings {
	constructor() {
		this.settingsBtn = document.querySelector(".settings-btn");
		this.settingsModal = document.querySelector(".settings-modal");
		this.settingsApplyBtn = document.querySelector(".settings-apply-btn");
		this.closeModalBtn = document.querySelector(".close-btn");
		this.themeInput = document.querySelector("#theme-input");
		this.unitInput = document.querySelector("#unit-input");
		this.bindEvents();
	}

	bindEvents() {
		this.settingsBtn.addEventListener("click", this.showModal);
		this.closeModalBtn.addEventListener("click", this.closeModal);
		this.settingsApplyBtn.addEventListener("click", this.updateDb);
	}

	getFormValues() {
		return {
			theme: this.themeInput.value,
			unit: this.unitInput.value,
		};
	}

	updateDb = (event) => {
		event.preventDefault();
		renderController.updateDb(this.getFormValues());
		this.closeModal();
	};

	updateSettings(data) {
		this.themeInput.value = data.theme;
		this.unitInput.value = data.unit;
	}

	showModal = () => {
		this.settingsModal.showModal();
	};

	closeModal = () => {
		this.settingsModal.close();
	};
}

export default new Settings();
