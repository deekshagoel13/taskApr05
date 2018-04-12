import React, { Component } from 'react';
import './CSS/app.css';
import Header from '../src/components/header';
import Footer from '../src/components/footer';
import Home from '../src/components/home';
import Signup from '../src/containers/signup';
import Login from '../src/containers/login';
import StudHome from '../src/containers/studHome';
import AdminHome from '../src/components/adminHome'
import PrivateRoute from '../src/components/privateRoute';
import PublicRoute from '../src/components/publicRoute';
import {NavLink,Switch} from 'react-router-dom';

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            user:false
        }
    }
    onLogin = () => {
        this.setState({
            user:true
        })
    };
    onLogout = () => {
        this.setState({
            user:false
        })
    };
  render() {
    return (
              <div>
                  <div>
                      <Header/>
                  </div>
                  <div>
                      <div>
                          {(!this.state.user && !localStorage.getItem('token')) && <Links/>}
                      </div>
                      <div>
                          <Switch>
                              <PublicRoute exact path={'/'}  component={Home}/>
                              <PublicRoute exact path={'/login'} component={() => <Login onLogin={this.onLogin} />}/>
                              <PublicRoute exact path={'/signup'}  component={Signup}/>
                              <PrivateRoute exact path={'/student'} component={() => <StudHome onLogout={this.onLogout}/>}/>
                              <PrivateRoute path={'/admin'} component={()=> <AdminHome onLogout={this.onLogout}/>}/>
                          </Switch>
                      </div>
                  </div>
                  <div>
                      <Footer/>
                  </div>
              </div>
    );
  }
}
const Links=()=>{
    return(
        <ul className={'navbar bg-dark'}>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/signup'}>Signup</NavLink>
            <NavLink to={'/login'}>Login</NavLink>
        </ul>
    )
};
export default App;
