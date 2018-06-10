import axios from 'axios';


export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POSTS = 'CREATE_POSTS';

export const ROOT_URL = "http://reduxblog.herokuapp.com/api";
export const API_KEY = "?key=sdgdsbdsj34cwr3vr3rwr";

export function fetchPosts(){
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  return{
    type: FETCH_POSTS,
    payload: request
  };
}

export function createPost(props){
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`,props);
  return{
    type:CREATE_POSTS,
    payload: request
  }
}
