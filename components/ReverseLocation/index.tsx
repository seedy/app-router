"use client"

import { getReverseLocation } from "@/api/location";
import { GEOLOCATION_QUERY_KEYS, REVERSE_LOCATION_QUERY_KEYS } from "@/constants/geolocation";
import getCurrentCoords from "@/helpers/getCurrentCoords";
import { useQuery } from "@tanstack/react-query";

const ReverseLocation = () => {
    const { data } = useQuery({ queryKey: GEOLOCATION_QUERY_KEYS.all, queryFn: getCurrentCoords });

    const { data: reverse } = useQuery({
        // eslint-disable-next-line @tanstack/query/exhaustive-deps
        queryKey: REVERSE_LOCATION_QUERY_KEYS.all,
        queryFn: () => getReverseLocation(data!.latitude, data!.longitude),
    })

    return (
        <h2>{reverse}</h2>
    )
}

export default ReverseLocation