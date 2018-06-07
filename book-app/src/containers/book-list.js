import React, {Component} from 'react';

// to forge connection between redux and React
import {connect} from 'react-redux'

class BookList extends Component{

      renderList(){
        return this.props.books.map( (book) => {
          return(
            <li key={book.title} className="list-group-item">
            {book.title}
            </li>
          );
        });
      }


      render(){
        return(
          <ul className="list-group col-sm-4">
          {this.renderList()}
          </ul>
        )
      }

}


// param : state is the application changes
// whenever the app state changes, the container is re-rendered
// and, the return of mapStateToProps will return props for container
function mapStateToProps(state){
  // whatever returns from here will show up as props inside book-list
  return{
    books : state.books
  }
}


export default connect(mapStateToProps)(BookList);
