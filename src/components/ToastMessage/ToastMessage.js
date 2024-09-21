import "./toastMessage.css";

class ToastMessage {
	constructor() {
		this.toast = document.querySelector(".toast-message");
		this.toastTitle = document.querySelector(".toast-title");
		this.toastDescription = document.querySelector(".toast-description");
		this.TOAST_DURATION = 3000;
	}

	/**
	 * Displays a toast notification with the provided data.
	 * @param {Object} data - The data for the toast notification.
	 * @param {string} data.type - The type of toast (e.g., 'success', 'error').
	 * @param {string} data.title - The title of the toast message.
	 * @param {string} data.message - The description or message of the toast.
	 */
	makeToast(data) {
		this.toast.classList = `toast-message ${data.type}`;
		this.toastTitle.textContent = data.title;
		this.toastDescription.textContent = data.message;
		this.displayToast();
	}

	displayToast() {
		this.toast.style.visibility = "visible";
		this.toast.classList.add("show-toast");
		this.toast.classList.remove("hide-toast");
		setTimeout(() => {
			this.toast.classList.add("hide-toast");
			this.toast.classList.remove("show-toast");
		}, this.TOAST_DURATION);
	}
}

export default new ToastMessage();
