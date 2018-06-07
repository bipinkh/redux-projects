import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

//creating state from reducers
const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
