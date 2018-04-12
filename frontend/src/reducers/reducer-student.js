import {SIGN_UP,FETCH_STUDENT} from "../actions/actionTypes";
export default (state=[], action)=>{
    switch (action.type){
        case SIGN_UP:
            return action.payload;
        case FETCH_STUDENT:
            return action.payload;
        default:
            return state;
    }
}