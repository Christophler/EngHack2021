# World Weather App
## About the project
An interactive web-app inspired by the lack of easy to find weather-related data. It utilizes a map in order to select any point on the globe to display data such as temperature, weather conditions, windspeed, and much more. It is an excellent way for researchers and hobbyists alike to find just the right type of data from one place, instead of having to desperately search multiple sources for one piece of data.
## What we used
The project utilizes a Node.js and express back-end, linked to a Javascript, css and html, combined with boostrap.css and leaflet.js libraries for the front-end. In order to obtain the weather data, we used the OpenWeatherMap API.

# How to run it
In order to ensure that the API call requests are made correctly, install all of the NPM packages listed below then go into the crud-api directory, before typing `npm start` in `crud-api/` as well as `frontend/`. You should then be able to run the web-app perfectly fine and start exploring the app on port 8080.

## NPM Installs:
```
npm install @ctt/crud-api
npm install @babel/core
npm install @babel/node
npm install @babel/preset-env
npm install nodemon
npm install cors
npm install dotenv
npm install express
npm install node-fetch
```
# Docker image
Another option is to simply use docker.
```docker build . -t world-weather-web/world-weather-web``

# Devpost Link
https://devpost.com/software/weathertogether

# Credits
This project was made in collaboration with Brayden, Christopher, Haoming, and Kevin for the EngHacks 2021 hackathon.
