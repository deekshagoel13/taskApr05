import React from 'react';
import {BrowserRouter,Route,NavLink,Switch} from 'react-router-dom';
import PrivateRoute from './privateRoute';
import EventList from '../containers/events';
import StudList from '../containers/students';
const Links=(props)=>{
    return(
        <ul className={'navbar bg-dark '}>
            <NavLink to={'/admin/event'}>Events</NavLink>
            <NavLink to={'/admin/students'}>Students</NavLink>
            <button className={'btn btn-light'} onClick={() => {
                localStorage.removeItem('token');
                localStorage.removeItem('userType');
                if(props.onLogout) props.onLogout();
            }}>Logout
            </button>
        </ul>
    )
};
class AdminHome extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <div>
                        <Links onLogout={this.props.onLogout}/>
                    </div>
                    <div>
                        <Switch>
                            <PrivateRoute exact path={'/admin/event'} component={EventList}/>
                            <PrivateRoute exact path={'/admin/students'} component={StudList}/>
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        )
    };
}
export default AdminHome;