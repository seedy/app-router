// CONSTANTS
const GEOLOCATION_OPTIONS = {
    enableHighAccuracy: true,
    maximumAge: 1000 * 60 * 60,
    timeout: 1000 * 60,
}

// HELPERS
const getCurrentPositionPromise = () => new Promise<GeolocationPosition>((resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject, GEOLOCATION_OPTIONS))

const getCurrentCoords = async () => {
    if (typeof window === "undefined") {
        return { latitude: 0, longitude: 0 }
    }
    if (!("geolocation" in navigator)) {
        throw new Error("Geolocation is not supported");
    }

    const currentPosition = await getCurrentPositionPromise();

    return currentPosition.coords;
}

export default getCurrentCoords