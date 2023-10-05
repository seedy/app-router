import { DEFAULT_WEATHER, WEATHER_CODES } from "@/constants/weather";

export interface CurrentWeather {
    time: number
    temperature: number
    windspeed: number
    winddirection: number
    is_day: number
    weathercode: keyof typeof WEATHER_CODES
}

export interface CurrentWeatherUnits {
    temperature: string
    windspeed: string
}

export interface CurrentWeatherResult {
    time: number
    temperature: string
    windSpeed: string
    windDirection: number
    isDay: Boolean
    weatherCode: keyof typeof WEATHER_CODES
    weather: string
}

const parseCurrentWeather = (currentWeather: CurrentWeather, units: CurrentWeatherUnits): CurrentWeatherResult => ({
    time: currentWeather.time * 1000,
    temperature: `${currentWeather.temperature} ${units.temperature}`,
    windSpeed: `${currentWeather.windspeed} ${units.windspeed}`,
    windDirection: currentWeather.winddirection,
    isDay: Boolean(currentWeather.is_day),
    weatherCode: currentWeather.weathercode,
    weather: WEATHER_CODES[(currentWeather.weathercode as keyof typeof WEATHER_CODES)] ?? DEFAULT_WEATHER,
})

export default parseCurrentWeather