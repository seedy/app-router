"use client"

import { getReverseLocation } from "@/api/location"
import { getLocalizedWeather } from "@/api/weather"
import IconSkeleton from "@/components/Skeleton/Icon"
import TextSkeleton from "@/components/Skeleton/Text"
import WeatherCard from "@/components/WeatherCard"
import WeatherIcon from "@/components/WeatherIcon"
import { GEOLOCATION_QUERY_KEYS, REVERSE_LOCATION_QUERY_KEYS } from "@/constants/geolocation"
import { WEATHER_QUERY_KEYS } from "@/constants/weather"
import getCurrentCoords from "@/helpers/getCurrentCoords"
import { useQuery } from "@tanstack/react-query"

const LocalizedWeather = () => {
    const dateFormatter = new Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    });

    const { isLoading, data } = useQuery({ queryKey: GEOLOCATION_QUERY_KEYS.all, queryFn: getCurrentCoords });

    const { isLoading: isLoadingReverse, data: reverse } = useQuery({
        // eslint-disable-next-line @tanstack/query/exhaustive-deps
        queryKey: REVERSE_LOCATION_QUERY_KEYS.all,
        queryFn: () => getReverseLocation(data!.latitude, data!.longitude),
        enabled: !isLoading,
    })

    const { isLoading: isLoadingWeather, data: weather } = useQuery({
        // eslint-disable-next-line @tanstack/query/exhaustive-deps
        queryKey: WEATHER_QUERY_KEYS.all,
        queryFn: () => getLocalizedWeather(data!.latitude, data!.longitude),
        enabled: !isLoading,
    })

    if (isLoadingWeather && isLoadingReverse) {
        return (
            <WeatherCard icon={<IconSkeleton />} location={<TextSkeleton />}>
                <TextSkeleton />
            </WeatherCard>
        )
    }
    if (isLoadingWeather) {
        return (
            <WeatherCard icon={<IconSkeleton />} location={<h2>{reverse}</h2>}>
                <TextSkeleton />
            </WeatherCard>
        )
    }
    if (isLoadingReverse) {
        return (
            <WeatherCard icon={<WeatherIcon width={40} height={40} variant={weather!.weatherCode} />} location={<TextSkeleton />}>
                <p>The weather is currently {weather!.weather} with a temperature of {weather!.temperature}. Last forecast was at {dateFormatter.format(new Date(weather!.time))} of the {weather!.isDay ? "day" : "night"}</p>
            </WeatherCard>
        )
    }

    return (
        <WeatherCard icon={<WeatherIcon width={40} height={40} variant={weather!.weatherCode} />} location={<h2>{reverse}</h2>}>
            <p>The weather is currently {weather!.weather} with a temperature of {weather!.temperature}. Last forecast was at {dateFormatter.format(new Date(weather!.time))} of the {weather!.isDay ? "day" : "night"}</p>
        </WeatherCard>
    )
}

export default LocalizedWeather