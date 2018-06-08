//action creator

export function selectBook(book){
  // select book is an action creator , it needs to return an action,
  // and object with type property
  return{
    type: 'BOOK_SELECTED',
    payload: book
  }
}
