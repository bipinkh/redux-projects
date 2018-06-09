
import { FETCH_WEATHER } from '../constants'
import { WEATHER_API_URL } from '../constants'

import axios from 'axios';

//action creators to fetch weather using api requests
 export function fetchWeather(city){
   // for now, country is US.
   const url = `${WEATHER_API_URL}&q=${city},np`;
   const request = axios.get(url);  // request is promise

   console.log('Sent request ', request);

   return{
     type:FETCH_WEATHER,
     payload:request
   }
 }
