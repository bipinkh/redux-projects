import React, {Component} from 'react'

export default class SearchBar extends Component{

  constructor(props){
    super(props);
    this.state = { term : '' };

    //if we are calling a callback function like below, this inside the handler will refer to the unknown context and not of this Component
    this.onInputChange = this.onInputChange.bind(this);
  }

// input text change event handler
onInputChange(event) {
  console.log(event.target.value);
  this.setState({term:event.target.value});
}

//event handler for form submit
onFormSubmit(event){
  event.preventDefault(); //do not reload


}

  render(){
    return(
      <form
        className="input-group"
        onSubmit={this.onFormSubmit}
      >
        <input
            placeholder="Get a five day forecast of your favourite city"
            className="form-control"
            value={this.state.term}
            onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary"> Submit </button>
        </span>
      </form>
    )
  }

}
