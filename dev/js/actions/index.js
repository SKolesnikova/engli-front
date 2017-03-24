import {GET_PHRASES, GET_PHRASE, CREATE_PHRASE, DELETE_PHRASE} from './types'; 
import  axios from 'axios';

const API_URL = "http://localhost:5000/api/v1" ; 

export function getPhrases(){
  const request = axios.get(`${API_URL}/phrases`);
  return{
    type: GET_PHRASES,
    payload: request
  };
}

export function createPhrase(props){
  const request = axios.post(`${API_URL}/phrases`, props);
  return{
    type: CREATE_PHRASE,
    payload: request
  };
}

export function deletePhrase(id){
  const request = axios.delete(`${API_URL}/phrases/${id}`);

  return{
    type: DELETE_PHRASE,
    payload: request
  }; 
}

export function getPhrase(id){
  const request = axios.get(`${API_URL}/phrases/${id}`);

  return{
    type: GET_PHRASE,
    payload: request
  }; 
}


