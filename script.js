// Global variables to be used in functions
let userSearches = [];
let searchButton = document.querySelector("#search");
let recentSearchesList = document.querySelector("#recent-searches-list");
let noSearchesMessage = document.querySelector("#no-searches-message");

window.onload = function () {
    renderPastSearches();
};

const renderPastSearches = () => {
    const savedSearches = JSON.parse(localStorage.getItem("userSearches"));
    if (savedSearches) {
        userSearches = savedSearches;
        savedSearches.forEach((userSearch) => {
            const listItem = document.createElement("li");
            const button = document.createElement("button");
            button.innerHTML = userSearch;
            button.addEventListener("click", () => {
                displayWeather(userSearch);
            });
            listItem.appendChild(button);
            recentSearchesList.appendChild(listItem);
        });
        noSearchesMessage.style.display = "none";
    }
};

searchButton.addEventListener("click", (event) => {
    event.preventDefault();
    handleNewSearch();
});

const handleNewSearch = () => {
    const cityInput = document.querySelector("#city").value;
    userSearches.unshift(cityInput);
    localStorage.setItem("userSearches", JSON.stringify(userSearches));
    document.querySelector("#city").value = "";
    renderSearchHistory(cityInput);
    displayWeather(cityInput);
};

const renderSearchHistory = (userSearch) => {
    const listItem = document.createElement("li");
    const button = document.createElement("button");
    button.innerHTML = userSearch;
    button.addEventListener("click", () => {
        displayWeather(userSearch);
    });
    listItem.appendChild(button);
    recentSearchesList.prepend(listItem);
    noSearchesMessage.style.display = "none";
};

const displayWeather = (userSearch) => {
    const OpenWeatherAPIKey = "3230124ef84390459285ccaaa719d2e6";
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${userSearch}&appid=${OpenWeatherAPIKey}&units=imperial`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            // current forecast
            const currentConditions = document.querySelector("#current-conditions");
            currentConditions.innerHTML = "";
            const currentInfo = document.createElement("h3");
            currentInfo.innerHTML = data.city.name + " " + data.list[0].dt_txt;
            const currentIcon = document.createElement("img");
            currentIcon.setAttribute("src", `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}.png`);
            currentInfo.appendChild(currentIcon);
            currentConditions.appendChild(currentInfo);
            const currentTemp = document.createElement("p");
            currentTemp.innerHTML = "Temperature: " + data.list[0].main.temp + "°F";
            currentConditions.appendChild(currentTemp);
            const currentWind = document.createElement("p");
            currentWind.innerHTML = "Wind speed: " + data.list[0].wind.speed + " MPH";
            currentConditions.appendChild(currentWind);
            const currentHumidity = document.createElement("p");
            currentHumidity.innerHTML = "Humidity: " + data.list[0].main.humidity + "%";
            currentConditions.appendChild(currentHumidity);

            // day 1 forecast
            const day1Conditions = document.querySelector("#day-1-forecast");
            day1Conditions.innerHTML = "";
            const day1Info = document.createElement("h3");
            day1Info.innerHTML = data.list[7].dt_txt;
            const day1Icon = document.createElement("img");
            day1Icon.setAttribute("src", `https://openweathermap.org/img/wn/${data.list[7].weather[0].icon}.png`);
            day1Info.appendChild(day1Icon);
            day1Conditions.appendChild(day1Info);
            const day1Temp = document.createElement("p");
            day1Temp.innerHTML = "Temperature: " + data.list[7].main.temp + "°F";
            day1Conditions.appendChild(day1Temp);
            const day1Wind = document.createElement("p");
            day1Wind.innerHTML = "Wind speed: " + data.list[7].wind.speed + " MPH";
            day1Conditions.appendChild(day1Wind);
            const day1Humidity = document.createElement("p");
            day1Humidity.innerHTML = "Humidity: " + data.list[7].main.humidity + "%";
            day1Conditions.appendChild(day1Humidity);

            // day 2 forecast
const day2Conditions = document.querySelector("#day-2-forecast");
day2Conditions.innerHTML = "";
const day2Info = document.createElement("h3");
day2Info.innerHTML = data.list[15].dt_txt;
const day2Icon = document.createElement("img");
day2Icon.setAttribute("src", `https://openweathermap.org/img/wn/${data.list[15].weather[0].icon}.png`);
day2Info.appendChild(day2Icon);
day2Conditions.appendChild(day2Info);
const day2Temp = document.createElement("p");
day2Temp.innerHTML = "Temperature: " + data.list[15].main.temp + "°F";
day2Conditions.appendChild(day2Temp);
const day2Wind = document.createElement("p");
day2Wind.innerHTML = "Wind speed: " + data.list[15].wind.speed + " MPH";
day2Conditions.appendChild(day2Wind);
const day2Humidity = document.createElement("p");
day2Humidity.innerHTML = "Humidity: " + data.list[15].main.humidity + "%";
day2Conditions.appendChild(day2Humidity);

// day 3 forecast
const day3Conditions = document.querySelector("#day-3-forecast");
day3Conditions.innerHTML = "";
const day3Info = document.createElement("h3");
day3Info.innerHTML = data.list[23].dt_txt;
const day3Icon = document.createElement("img");
day3Icon.setAttribute("src", `https://openweathermap.org/img/wn/${data.list[23].weather[0].icon}.png`);
day3Info.appendChild(day3Icon);
day3Conditions.appendChild(day3Info);
const day3Temp = document.createElement("p");
day3Temp.innerHTML = "Temperature: " + data.list[23].main.temp + "°F";
day3Conditions.appendChild(day3Temp);
const day3Wind = document.createElement("p");
day3Wind.innerHTML = "Wind speed: " + data.list[23].wind.speed + " MPH";
day3Conditions.appendChild(day3Wind);
const day3Humidity = document.createElement("p");
day3Humidity.innerHTML = "Humidity: " + data.list[23].main.humidity + "%";
day3Conditions.appendChild(day3Humidity);

// day 4 forecast
const day4Conditions = document.querySelector("#day-4-forecast");
day4Conditions.innerHTML = "";
const day4Info = document.createElement("h3");
day4Info.innerHTML = data.list[31].dt_txt;
const day4Icon = document.createElement("img");
day4Icon.setAttribute("src", `https://openweathermap.org/img/wn/${data.list[31].weather[0].icon}.png`);
day4Info.appendChild(day4Icon);
day4Conditions.appendChild(day4Info);
const day4Temp = document.createElement("p");
day4Temp.innerHTML = "Temperature: " + data.list[31].main.temp + "°F";
day4Conditions.appendChild(day4Temp);
const day4Wind = document.createElement("p");
day4Wind.innerHTML = "Wind speed: " + data.list[31].wind.speed + " MPH";
day4Conditions.appendChild(day4Wind);
const day4Humidity = document.createElement("p");
day4Humidity.innerHTML = "Humidity: " + data.list[31].main.humidity + "%";
day4Conditions.appendChild(day4Humidity);

// day 5 forecast
const day5Conditions = document.querySelector("#day-5-forecast");
day5Conditions.innerHTML = "";
const day5Info = document.createElement("h3");
day5Info.innerHTML = data.list[39].dt_txt;
const day5Icon = document.createElement("img");
day5Icon.setAttribute("src", `https://openweathermap.org/img/wn/${data.list[39].weather[0].icon}.png`);
day5Info.appendChild(day5Icon);
day5Conditions.appendChild(day5Info);
const day5Temp = document.createElement("p");
day5Temp.innerHTML = "Temperature: " + data.list[39].main.temp + "°F";
day5Conditions.appendChild(day5Temp);
const day5Wind = document.createElement("p");
day5Wind.innerHTML = "Wind speed: " + data.list[39].wind.speed + " MPH";
day5Conditions.appendChild(day5Wind);
const day5Humidity = document.createElement("p");
day5Humidity.innerHTML = "Humidity: " + data.list[39].main.humidity + "%";
day5Conditions.appendChild(day5Humidity);
})};