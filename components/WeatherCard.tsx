import { ComponentProps, ReactNode } from "react";

interface WeatherCardProps extends ComponentProps<"div"> {
    icon: ReactNode
    location: ReactNode
}
const WeatherCard = ({ icon, location, children }: WeatherCardProps) => (
    <div className="border border-primary shadow rounded-md p-4 max-w-sm w-full mx-auto">
        <div className="flex gap-4">
            {icon}
            <div className="flex flex-1 flex-col gap-6 py-1">
                {location}
                {children}
            </div>
        </div>
    </div>

)

export default WeatherCard