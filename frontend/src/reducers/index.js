import {combineReducers} from 'redux';
import studentReducer from './reducer-student';
import eventReducer from './reducer-events';
const rootReducer=combineReducers({
    students:studentReducer,
    events:eventReducer
});
export default rootReducer;