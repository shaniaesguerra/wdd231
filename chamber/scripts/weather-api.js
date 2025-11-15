// select HTML elements in the document
const weatherIcon = document.querySelector('#weather-icon');
const currentTemp = document.querySelector('#current-temp');
const weatherDesc = document.querySelector('#weather-desc');
const highTemp = document.querySelector('#high-temp');
const lowTemp = document.querySelector('#low-temp');
const humidity = document.querySelector('#humidity');
const sunriseTime = document.querySelector("#sunrise-time");
const sunsetTime = document.querySelector("#sunset-time");

const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=53.26&lon=-113.55&units=metric&appid=295597fd303b1837d9546858b82c9006';

async function apiFetch() {
    try {
        const response = await fetch(weatherUrl);
        if (response.ok) {
            const data = await response.json();
            //console.log(data); // for testing and seeing output
            displayResults(data); //uncomment the call to the function when output is good
        } else {
            throw Error(await response.text());
            
        }
    } catch (error) {
        console.log(error); //print error to console
    }
}

function displayResults(data) {
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    //Set weather icon attributes
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', `${data.weather[0].main} Weather Icon`);

    //Change content of Current Temp
    currentTemp.innerHTML = `${data.main.temp}&deg;C`;

    //Change content of Weather description
    weatherDesc.textContent = `${data.weather[0].description}`;

    //Change content of High Temp
    highTemp.innerHTML = `${data.main.temp_max}&deg;`;

    //Change content of Low Temp
    lowTemp.innerHTML = `${data.main.temp_min}&deg;`;

    //Change content of Humidity
    humidity.textContent = `${data.main.humidity}%`;

    //Change content of Sunrise Time
    sunriseTime.textContent = `${getSunriseLocalTime(data)}`;

    //Change content of Sunset Time
    sunsetTime.textContent = `${getSunsetLocalTime(data)}`;
}

function getSunsetLocalTime(dataObj) {
    /*
    Returns the Sunset Local Time as a string in the format: 'hh:mm (AM/PM)'
     */
    const timeUTC = dataObj.sys.sunset; //sunset time in UTC
    const timezoneOffset = dataObj.timezone; //timezone offset

    //convert in milliseconds
    const sunsetTimeMs = (timeUTC + timezoneOffset) * 1000;
    const currentSunsetTime = new Date(sunsetTimeMs);
    const currentSunsetTimeStr = currentSunsetTime.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        timeZone: 'UTC',
        hour12: true
    });
    return currentSunsetTimeStr
}

function getSunriseLocalTime(dataObj) {
    /*
    Returns the Sunrise Local Time as a string in the format: 'hh:mm (AM/PM)'
     */
    const timeUTC = dataObj.sys.sunrise; //sunset time in UTC
    const timezoneOffset = dataObj.timezone; //timezone offset

    //convert in milliseconds
    const sunriseTimeMs = (timeUTC + timezoneOffset) * 1000;
    const currentSunriseTime = new Date(sunriseTimeMs);
    const currentSunriseTimeStr = currentSunriseTime.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        timeZone: 'UTC',
        hour12: true
    });
    return currentSunriseTimeStr
}

apiFetch();