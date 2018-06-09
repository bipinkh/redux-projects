const WEATHER_API_ID = "4b4a12faad581af29ea5488b26df8fe8";
const WEATHER_API_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${WEATHER_API_ID}`;
const FETCH_WEATHER = 'FETCH_WEATHER'
// import FETCH_WEATHER from '../constants'
// import WEATHER_API_URL from '../constants'

import axios from 'axios';

//action creators to fetch weather using api requests
 export function fetchWeather(city){
   // for now, country is US.
   const url = `${WEATHER_API_URL}&q=${city},us`;
   const request = axios.get(url);  // request is promise

   console.log('Sent request ', request);

   return{
     type:FETCH_WEATHER,
     payload:request
   }
 }
