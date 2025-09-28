const APIKEY = "688c1c9fc7c24164801153611252809";
const args = process.argv.slice(2);
const city = args[0];
import axios from "axios";

if (args.length !== 1) {
    console.log(
    "Error: Please provide city name\n" +
    "Usage: node weather.js <city>\n" +
    "Example: node weather.js 'Khon Kaen'\n" +
    "Note: Use quotes for city names with spaces"
    );
    process.exit(1);
}

async function getWeather() {
    try {
        const response = await axios.get(
            `http://api.weatherapi.com/v1/current.json?key=${APIKEY}&aqi=no&q=${city}`
        );

        const weather = response.data;

        console.log(`Current Temperature in ${weather.location.name} is ${weather.current.temp_c} °C`);
        console.log(`Weather Condition: ${weather.current.condition.text}`);

    } catch (error) {
        if (error.response && error.response.status === 404) {
            console.log("City not found. Please check the city name and try again.");
        } else {
            console.log("Error fetching weather data. Please try again later.");
        }
        process.exit(1);
    }
}

getWeather();