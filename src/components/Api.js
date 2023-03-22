
export const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
		'X-RapidAPI-Host': process.env.REACT_APP_RAPIDAPI_HOST
	}
};

export const geoUrl= process.env.REACT_APP_GEO_URL;

export const weatherApiKey = process.env.REACT_APP_WEATHER_API_KEY;

export const weatherUrl = process.env.REACT_APP_WEATHER_URL;

