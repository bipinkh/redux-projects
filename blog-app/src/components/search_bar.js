import React, {Component} from "react";

// // to get input from the input bar
// const SearchBar = () => {
//   return <input/>;
// }


// using class
class SearchBar extends Component{

  constructor(props){
    super(props);
    this.state = { term: ''}; // this term will store the user enetered data
  }

//every class must have class function
  render(){
    // using event handler
    return (
      <div className="search-bar">
      <input
      onChange={ (event) => this.onInputChanged(event.target.value)}
      />
      </div>
    )
      // return <input onChange={this.onInputChange}/>;
  }

onInputChanged(term){
  this.setState({term});
  this.props.onSearchTermChanged(term);
}

//
// //function for event handling of search action
// onInputChange(event){
//   console.log(event.target.value);
// }
}

export default SearchBar;
