import ClientProvider from "@/components/ClientProvider";
import { ReactNode } from "react";

interface WeatherLayoutProps {
    children: ReactNode
}
export default function Layout({ children }: WeatherLayoutProps) {
    return (
        <ClientProvider>
            <section>
                <h1>Weather</h1>
                {children}
            </section>
        </ClientProvider>
    )
}