import React from 'react';
import {Redirect,Route} from 'react-router-dom';
const PublicRoute=(props)=>{
    return(
        !localStorage.getItem('token') ?
            <Route {...props}/>:
            localStorage.getItem('userType')==='S'?<Redirect to={'/student'}/>
                :<Redirect to={'/admin'}/>
    )
};
export default PublicRoute;