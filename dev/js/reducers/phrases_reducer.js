import {GET_PHRASES, GET_PHRASE} from '../actions/types';

const INITIAL_STATE = {all: [], phrase: null};

export default function(state = INITIAL_STATE, action){
  switch(action.type){
    case GET_PHRASES:
      return { ...state, all: action.payload.data} ;
    case GET_PHRASE:
      return { ...state, phrase: action.payload.data} ;
    default:
      return state;
  }
}
