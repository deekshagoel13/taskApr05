import {FETCH_EVENT,ADD_EVENT} from "../actions/actionTypes";
export default (state=[], action)=>{
    switch (action.type){
        case FETCH_EVENT:
            return action.payload;
        case ADD_EVENT:
            let events=[...state];
            events.splice(0,0,action.payload);
            return events;
        default:
            return state;
    }
}