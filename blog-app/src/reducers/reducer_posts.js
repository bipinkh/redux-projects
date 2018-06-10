import React from 'react';
import FETCH_POSTS from '../actions/index';

// all : all posts List
// post: current active post
const INTIAL_STATE = { all:[] , post:null };

export default function(state = INTIAL_STATE, action){
  switch(action.type){

    case FETCH_POSTS:
    // take the current state and add the new data from the action
        return{
          ...state,
          all: action.payload.data
        }

    default:
      return state;
  }
}
