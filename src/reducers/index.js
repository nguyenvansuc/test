import {combineReducers} from 'redux';
import listReducers from './list'

const rootReducer = combineReducers({
    list:listReducers,
});

export default rootReducer