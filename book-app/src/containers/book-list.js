import React, {Component} from 'react';

// to forge connection between redux and React
import {connect} from 'react-redux'
import {selectBook} from '../actions/index'
import {bindActionCreators} from 'redux'

class BookList extends Component{

      renderList(){
        return this.props.books.map( (book) => {
          return(
            <li
              onClick = { () => this.props.selectBook(book) }
              key={book.title}
              className="list-group-item">
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

// every return from this function will be available as props to the container
// and the container re renders
function mapDispatchToProps(dispatch){
  // injecting actions to all reducers when state changes
  // selectBook : selectBook means map map the action creator (right side selectBook) to the function alias (left side selectBook)
  return bindActionCreators({selectBook : selectBook}, dispatch);
}

// promote BookList from component to container
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
