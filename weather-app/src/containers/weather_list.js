import React, { Component } from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart'

class WeatherList extends Component{


renderWeather(cityData){
  const name = cityData.city.name;
  const temps = cityData.list.map( weather => weather.main.temp )
  const pressure = cityData.list.map( weather => weather.main.pressure )
  const humidity = cityData.list.map( weather => weather.main.humidity )
  console.log(temps)

  return(
  <tr>
    <td> {name} </td>
    <td> <Chart data={temps} color="orange" /> </td>
    <td> <Chart data={pressure} color="red" /> </td>
    <td> <Chart data={humidity} color="green" /> </td>
  </tr>
  )
}

render(){
  console.log('city lists:' ,this.props.action_weather)
  return(
    <table className="table table-hover">
      <thead>
          <tr>
              <th> City </th>
              <th> Temperature </th>
              <th> Pressure </th>
              <th> Humidity </th>
          </tr>
      </thead>
      <tbody>
        {this.props.action_weather.map(this.renderWeather)}
      </tbody>
    </table>
  )
}
}

function mapStateToProps(state){
  return {action_weather : state.weather };
}


// function mapStateToProps({ weather }){
//   return { weather };
// }

export default connect(mapStateToProps)(WeatherList);
