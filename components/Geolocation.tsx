"use client"

import { GEOLOCATION_QUERY_KEYS } from "@/constants/geolocation";
import getCurrentCoords from "@/helpers/getCurrentCoords";
import { useQuery } from "@tanstack/react-query";
import { ReactNode } from "react";

interface GeolocationProps {
    children: ReactNode
}
const Geolocation = ({ children }: GeolocationProps) => {
    // Waiting for React#use to be standardized
    useQuery({ queryKey: GEOLOCATION_QUERY_KEYS.all, queryFn: getCurrentCoords });

    return (
        <>
            {children}
        </>
    )
}

export default Geolocation