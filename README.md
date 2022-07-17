# React Weather App [integrify]

Weather App made with using Accuweather API to get city forecast

### App Screenshots

![image](https://github.com/amanuela97/React-AccuWeather/blob/master/public/screenshots/weather-app-normal.png)
![image](https://github.com/amanuela97/React-AccuWeather/blob/master/public/screenshots/weather-app-data.png)
![image](https://github.com/amanuela97/React-AccuWeather/blob/master/public/screenshots/weather-app-error.png)

### Tasks

- [x] Homepage with textfield
- [x] App divided into smaller components
- [x] User friendly error shown
- [x] A responsive user interface styled with tailwindcss
- [x] Used geolocation from browser API
- [x] React concepts utilized

### APIs

- used https://developer.accuweather.com/accuweather-locations-api/apis/get/locations/v1/cities/search to search for a city by name and get the location key, which is needed to call other APIs.
- used https://developer.accuweather.com/accuweather-forecast-api/apis/get/forecasts/v1/daily/1day/%7BlocationKey%7D to get the forecast of the city.
- used https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=XXXXXXXXXXXX&longitude=XXXXXXXXXXXX&localityLanguage=en to get city name from geo coordinates.
