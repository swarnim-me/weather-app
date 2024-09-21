import ClearDay from "../assets/icons/weather/clear-day.svg";
import ClearNight from "../assets/icons/weather/clear-night.svg";
import Cloudy from "../assets/icons/weather/cloudy.svg";
import FogDay from "../assets/icons/weather/fog-day.svg";
import PartlyCloudyDay from "../assets/icons/weather/partly-cloudy-day.svg";
import PartlyCloudyNight from "../assets/icons/weather/partly-cloudy-night.svg";
import Rain from "../assets/icons/weather/rain.svg";
import Snow from "../assets/icons/weather/snow.svg";
import Wind from "../assets/icons/weather/wind.svg";

class IconMapper {
	constructor() {}

	getIcon(weather) {
		switch (weather) {
			case "clear-day":
				return ClearDay;
			case "clear-night":
				return ClearNight;
			case "cloudy":
				return Cloudy;
			case "fog-day":
				return FogDay;
			case "partly-cloudy-day":
				return PartlyCloudyDay;
			case "partly-cloudy-night":
				return PartlyCloudyNight;
			case "rain":
				return Rain;
			case "snow":
				return Snow;
			case "wind":
				return Wind;
			default:
				return ClearDay;
		}
	}
}

export default new IconMapper();
