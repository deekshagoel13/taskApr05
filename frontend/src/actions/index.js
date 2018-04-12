import {SIGN_UP,LOG_IN,ADD_EVENT,FETCH_EVENT,FETCH_STUDENT} from './actionTypes';
import axiosI from '../services/axiosInstance';
export const studentSignup=(studentData)=>{
    return (dispatch=>{
        return axiosI.post('/student', studentData).then(() => {
            return axiosI.post('/user', studentData).then(({data}) => {
                dispatch({
                    type:SIGN_UP,
                    payload:data
                });
                return data;
            })
        })
    })
};
export const login=(credentials)=>{
    return (dispatch=>{
        return axiosI.post('/auth/login', credentials).then(({data}) => {
                dispatch({
                    type:LOG_IN,
                    payload:data
                });
            localStorage.setItem('token',data.obj.token);
            localStorage.setItem('userType',data.obj.userType);
                return data;
            })
        })
};
export const fetchStudents=()=>{
    return (dispatch=>{
        return axiosI.get('/students',{
            headers:{
                'x-auth':localStorage.getItem('token')
            }
        }).then(({data})=> {
            debugger;
            dispatch({
                type:FETCH_STUDENT,
                payload:data
            });
            return data;
        })
    })
};
export const fetchEvents=()=>{
    return (dispatch=>{
        return axiosI.get('/events',{
                headers:{
                    'x-auth':localStorage.getItem('token')
                }
            }).then(({data})=> {
            debugger;
                dispatch({
                    type:FETCH_EVENT,
                    payload:data
                });
                return data;
        })
    })
};
export const addEvents=(eventData)=>{
    return (dispatch=>{
        axiosI.post('/event',eventData,{
            headers:{
                'x-auth':localStorage.getItem('token')
            }
        }).then(({data})=>{
           dispatch({
               type:ADD_EVENT,
               payload:data
           })
        }).catch((err)=>{
            console.log(err);
        })
    })
};