import { WEATHER_CODES } from "@/constants/weather"
import parseCurrentWeather from "@/helpers/parseCurrentWeather"

// CONSTANTS
const ENDPOINT = "https://api.open-meteo.com/v1/forecast"
const STATIC_PARAMS = "current_weather=true&forecast_days=1&timeformat=unixtime"

// API


export const getDefaultWeather = async () => {
    const res = await fetch(`${ENDPOINT}?latitude=52.52&longitude=13.41&${STATIC_PARAMS}`)

    if (!res.ok) {
        throw new Error('Failed to fetch weather api');
    }

    const data = await res.json();

    return parseCurrentWeather(data.current_weather, data.current_weather_units)
}

export const getLocalizedWeather = async (lat: number, long: number) => {
    const res = await fetch(`${ENDPOINT}?latitude=${lat}&longitude=${long}&${STATIC_PARAMS}`);
    if (!res.ok) {
        throw new Error('Failed to fetch weather api');
    }

    const data = await res.json();
    const currentWeather = data.current_weather;

    return parseCurrentWeather(data.current_weather, data.current_weather_units)
}