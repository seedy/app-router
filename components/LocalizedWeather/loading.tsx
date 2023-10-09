import IconSkeleton from "@/components/Skeleton/Icon";
import TextSkeleton from "@/components/Skeleton/Text";
import WeatherCard from "@/components/WeatherCard";

const LocalizedWeatherLoading = () => (
    <WeatherCard icon={<IconSkeleton />} location={<TextSkeleton />}>
        <TextSkeleton />
    </WeatherCard>
)

export default LocalizedWeatherLoading