import { format } from "date-fns";

class ApiFormatter {
	formatData(data) {
		const formattedResponse = {
			location: data.resolvedAddress,
			currentDay: {
				date: format(data.days[0].datetime, "io MMMM, yyyy"),
				description: data.currentConditions.conditions,
				temperature: data.currentConditions.temp,
				feelsLike: data.currentConditions.feelslike,
				humidity: data.currentConditions.humidity,
				rainChance: data.currentConditions.precipprob,
				weatherType: data.currentConditions.preciptype,
				windSpeed: data.currentConditions.windspeed,
				windDirection: data.currentConditions.winddir,
				pressure: data.currentConditions.pressure,
				cloudCover: data.currentConditions.cloudcover,
				uvIndex: data.currentConditions.uvindex,
				hourWiseData: data.days[0].hours.map((value) => ({
					temp: value.temp,
					time: value.datetime,
					description: value.conditions,
				})),
			},
			weeklyData: data.days.map((value) => ({
				day: format(value.datetime, "EEE"),
				temperature: value.temp,
				temperatureMin: value.tempmin,
				temperatureMax: value.tempmax,
			})),
		};

		return formattedResponse;
	}
}

export default ApiFormatter;
