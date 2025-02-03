// Define static weather values (to be replaced with API data in future)
const temperature = 10; // °C
const windSpeed = 5;   // km/h

// Function to calculate wind chill
function calculateWindChill(tempC, windKmh) {
    // Check if conditions are met for wind chill calculation
    if (tempC <= 10 && windKmh > 4.8) {
        // Wind chill formula for Celsius
        return (13.12 + 0.6215 * tempC - 11.37 * Math.pow(windKmh, 0.16) + 0.3965 * tempC * Math.pow(windKmh, 0.16)).toFixed(1);
    }
    return "N/A";
}

// When the DOM is loaded, update the weather information
document.addEventListener('DOMContentLoaded', function() {
    // Display temperature
    const tempElement = document.getElementById('temperature');
    if (tempElement) {
        tempElement.textContent = temperature;
    }

    // Display wind speed
    const windElement = document.getElementById('wind-speed');
    if (windElement) {
        windElement.textContent = windSpeed;
    }

    // Calculate and display wind chill
    const windChillElement = document.getElementById('wind-chill');
    if (windChillElement) {
        const windChill = calculateWindChill(temperature, windSpeed);
        windChillElement.textContent = windChill === "N/A" ? windChill : `${windChill}°C`;
    }

    // Set current year in footer
    const currentYear = new Date().getFullYear();
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = currentYear;
    }

    // Set last modified date
    const lastModifiedElement = document.getElementById('last-modified');
    if (lastModifiedElement) {
        lastModifiedElement.textContent = document.lastModified;
    }
});