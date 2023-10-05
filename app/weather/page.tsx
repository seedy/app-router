import { getDefaultWeather } from "@/api/weather";
import LocalizedWeather from "@/components/LocalizedWeather";
import { WEATHER_QUERY_KEYS } from "@/constants/weather";
import getServerQueryClient from "@/helpers/getServerQueryClient";
import { Hydrate, dehydrate } from "@tanstack/react-query";
import { Metadata } from "next"


export const metadata: Metadata = {
    title: "Weather",
    description: "Weather information",
}

async function getData() {
    const res = await getDefaultWeather();
    return res;
}

export default async function Weather() {
    const queryClient = getServerQueryClient();
    await queryClient.prefetchQuery({ queryKey: WEATHER_QUERY_KEYS.all, queryFn: getData });
    const dehydratedState = dehydrate(queryClient)

    return (
        <Hydrate state={dehydratedState}>
            <section>
                <h1>Weather</h1>
                <LocalizedWeather />
            </section>
        </Hydrate>

    )
}