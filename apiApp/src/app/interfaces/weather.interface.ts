export interface Weather{
    current: {
        temperature: number,
        weather_descriptions: [string],
        weather_icons: [string]
    },
    location: {
        name: string,
        region: string
    }
}