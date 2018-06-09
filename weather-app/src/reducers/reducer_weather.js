import { FETCH_WEATHER } from '../constants';


export default function(state = [], action){
  console.log('handling action in reducer_weather', action.type);

  switch(action.type){
    case FETCH_WEATHER:
      //adding the new city to the state

      //1. wrong way, do not push to the existing state and return. it is mutating state.
      // return state.push[action.payload.data];

      //2. right way, create new fresh state
      // return state.concat([action.payload.data]);

      //3. the more standard way using ES6 standard
      return [action.payload.data, ...state];
      }
  return state;
}
