require('dotenv').config()

export const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
		'X-RapidAPI-Host': process.env.RAPIDAPI_HOST
	}
};

export const geoUrl= process.env.GEO_URL;

export const weatherApiKey = process.env.WEATHER_API_KEY;

export const weatherUrl = process.env.WEATHER_URL;

