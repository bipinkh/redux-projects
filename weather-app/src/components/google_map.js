import React, {Component} from 'react';


//ref makes a reference to html
class GoogleMap extends Component{

  //called after component is rendered
  componentDidMount(){
    new google.maps.Map(this.refs.map,{
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    })
  }

  render(){
    //this.ref.map
    return <div ref="map" />;
  }
}


export default GoogleMap;
