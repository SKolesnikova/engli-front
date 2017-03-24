import {combineReducers} from 'redux';
import PhrasesReducer from './phrases_reducer';
import {reducer as formReducer} from 'redux-form';

const allReducers = combineReducers({
  phrases: PhrasesReducer,
  form: formReducer
});

export default allReducers
