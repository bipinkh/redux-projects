import React, { Component } from 'react';
import {connect} from 'react-redux';

class WeatherList extends Component{


renderWeather(cityData){
  return(
  <tr>
    <td> {cityData.city.name} </td>
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
