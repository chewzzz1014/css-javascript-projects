import counterReducer from './counter';
import loggedReducer from './isLogged';
import { combineReducers } from 'redux';


// combine 2 reducrs
const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer
});

export default allReducers;