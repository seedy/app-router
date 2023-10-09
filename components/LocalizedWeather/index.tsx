"use client"

import { getLocalizedWeather } from "@/api/weather"
import ReverseLocation from "@/components/ReverseLocation"
import ReverseLocationLoading from "@/components/ReverseLocation/loading"
import WeatherCard from "@/components/WeatherCard"
import WeatherIcon from "@/components/WeatherIcon"
import { GEOLOCATION_QUERY_KEYS } from "@/constants/geolocation"
import { WEATHER_QUERY_KEYS } from "@/constants/weather"
import getCurrentCoords from "@/helpers/getCurrentCoords"
import { useQuery } from "@tanstack/react-query"
import { ReactNode, Suspense } from "react"

interface LocalizedWeatherProps {
    fallback: ReactNode
}
const LocalizedWeather = ({ fallback }: LocalizedWeatherProps) => {
    const dateFormatter = new Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    });

    const { data } = useQuery({ queryKey: GEOLOCATION_QUERY_KEYS.all, queryFn: getCurrentCoords });

    const { data: weather } = useQuery({
        // eslint-disable-next-line @tanstack/query/exhaustive-deps
        queryKey: WEATHER_QUERY_KEYS.all,
        queryFn: () => getLocalizedWeather(data!.latitude, data!.longitude),
    })

    return (
        <WeatherCard icon={<WeatherIcon width={40} height={40} variant={weather!.weatherCode} />} location={
            <Suspense fallback={fallback}>
                <ReverseLocation />
            </Suspense>
        }>
            <p>The weather is currently {weather!.weather} with a temperature of {weather!.temperature}. Last forecast was at {dateFormatter.format(new Date(weather!.time))} of the {weather!.isDay ? "day" : "night"}</p>
        </WeatherCard>
    )
}

export default LocalizedWeather