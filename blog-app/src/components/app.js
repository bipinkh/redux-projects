import React, { Component } from 'react';
import {AppRoute} from '../routes';

export default class App extends Component {
  render() {
    return (
      <div>
                {this.props.children}
      </div>
    );
  }
}
