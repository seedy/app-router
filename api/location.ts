// CONSTANTS
const ENDPOINT = "https://nominatim.openstreetmap.org/reverse?format=jsonv2"

// API
export const getReverseLocation = async (lat: number, long: number) => {
    const res = await fetch(`${ENDPOINT}&lat=${lat}&lon=${long}`);

    if (!res.ok) {
        throw new Error('Failed to fetch reverse location API');
    }

    const data = await res.json();

    return data.display_name as string;
}