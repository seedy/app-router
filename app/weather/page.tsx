import { getDefaultWeather } from "@/api/weather";
import Geolocation from "@/components/Geolocation";
import LocalizedWeather from "@/components/LocalizedWeather";
import LocalizedWeatherLoading from "@/components/LocalizedWeather/loading";
import ReverseLocationLoading from "@/components/ReverseLocation/loading";
import { Metadata } from "next"
import { Suspense } from "react";


export const metadata: Metadata = {
    title: "Weather",
    description: "Weather information",
}

async function getData() {
    const res = await getDefaultWeather();
    return res;
}

export default async function Weather() {
    await getData();

    return (
        <section>
            <Suspense fallback={<div>Loading geolocation</div>}>
                <Geolocation>
                    <Suspense fallback={<LocalizedWeatherLoading />}>
                        <LocalizedWeather fallback={<ReverseLocationLoading />} />
                    </Suspense>
                </Geolocation>
            </Suspense>
        </section>

    )
}