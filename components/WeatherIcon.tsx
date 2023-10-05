import { WEATHER_CODES } from "@/constants/weather"
import { CloudDrizzleIcon, CloudHailIcon, CloudIcon, CloudLightningIcon, CloudRainIcon, CloudRainWindIcon, CloudSnowIcon, CloudSunIcon, CloudSunRainIcon, HazeIcon, LucideIcon, SnowflakeIcon, SunIcon, SunMediumIcon } from "lucide-react"
import { ComponentProps } from "react"

// CONSTANTS
const WEATHER_ICONS_PER_CODE = {
    [0]: SunIcon,
    [1]: SunMediumIcon,
    [2]: CloudSunIcon,
    [3]: CloudIcon,
    [45]: HazeIcon,
    [48]: SnowflakeIcon,
    [51]: CloudDrizzleIcon,
    [53]: CloudDrizzleIcon,
    [55]: CloudDrizzleIcon,
    [56]: CloudSnowIcon,
    [57]: CloudSnowIcon,
    [61]: CloudSunRainIcon,
    [63]: CloudRainIcon,
    [65]: CloudRainIcon,
    [66]: CloudSnowIcon,
    [67]: CloudSnowIcon,
    [71]: CloudSnowIcon,
    [73]: CloudSnowIcon,
    [75]: CloudSnowIcon,
    [77]: CloudSnowIcon,
    [80]: CloudRainWindIcon,
    [81]: CloudRainWindIcon,
    [82]: CloudRainWindIcon,
    [85]: CloudHailIcon,
    [86]: CloudHailIcon,
    [95]: CloudLightningIcon,
    [96]: CloudLightningIcon,
    [99]: CloudLightningIcon,
}

interface WeatherIconProps extends ComponentProps<LucideIcon> {
    variant: keyof typeof WEATHER_CODES
}
const WeatherIcon = ({ variant, ...props }: WeatherIconProps) => {
    const Icon = WEATHER_ICONS_PER_CODE[variant];

    return (
        <Icon {...props} />
    )
}

export default WeatherIcon