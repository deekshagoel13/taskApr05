import React from 'react';
import {push} from 'react-router-redux';
import {NavLink} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {login} from '../actions';
class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:{}
        }
    }
    handleChange=(e)=>{
        const {name,value}=e.target;
        const {data}=this.state;
        data[name]=value;
        this.setState({
            data
        })
    };
    handleLogin=(e)=>{
        e.preventDefault();
        console.log(this.state.data);
       this.props.login(this.state.data).then((data)=>{
            if(data){
                if (this.props.onLogin) this.props.onLogin();
                (data.obj.userType==='S')?
                this.props.history.push('/student')
                :this.props.goToAdmin();
            }
        }).catch((err)=>{
            console.log(err);
        })
    };
    render(){
        const {data}=this.state;
        return(
            <div className={'container jumbotron col-sm-6'}>
                <form className={'col-sm-6 offset-sm-3'}>
                    <div align={'center'}>
                        <label><h4>LOG IN</h4></label>
                    </div>
                    <div className={'form-group'}>
                        <input type={'text'} className={'form-control'}
                               placeholder={'Email'}
                               value={data.email}
                               onChange={this.handleChange}
                               name={'email'}
                        />
                    </div>
                    <div className={'form-group'}>
                        <input type={'password'} className={'form-control'}
                               placeholder={'Password'}
                               value={data.password}
                               onChange={this.handleChange}
                               name={'password'}
                        />
                    </div>
                    <div align={'center'}>
                        <button className={'btn btn-dark'} onClick={this.handleLogin}>Login</button>
                    </div>
                    <div align={'center'}>
                        <NavLink className={'nav-item'} to={'/signup'}>Not Registered?</NavLink>
                    </div>
                </form>
            </div>
        )
    };
}
const matchDispatchToProps=(dispatch)=>{
    return bindActionCreators({
        login,
        goToAdmin:()=>push('/admin')
    },dispatch)
};
export default connect(null,matchDispatchToProps)(Login);