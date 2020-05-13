import { combineReducers } from 'redux';
import { musicReducer } from './musicReducer'
import { utilityReducer } from './utilityReducer'

export default combineReducers({
    musicReducer,
    utilityReducer
});