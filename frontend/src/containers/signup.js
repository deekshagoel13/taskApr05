import React from 'react';
import {NavLink} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {studentSignup} from '../actions';
class Signup extends React.Component{
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
    handleRegister=(e)=>{
        e.preventDefault();
        if(Object.keys(this.state.data).length>0){
            this.props.studentSignup(this.state.data).then(()=>{
                this.props.history.push('/login');
            })
       }
    };
    shouldComponentUpdate(){
        if(Object.keys(this.state.data).length>0)
            return true;
        else
            return false;
    }
    render(){
        console.log("render");
        const {data}=this.state;
        return(
            <div className={'container jumbotron col-sm-7'}>
                <form className={'col-sm-6 offset-sm-3'}>
                    <div align={'center'}>
                        <label><h4>Sign Up</h4></label>
                    </div>
                    <div className={'form-group'}>
                        <input type={'text'} placeholder={'Name'}
                               className={'form-control'}
                               name={'Name'}
                               value={data.Name}
                               onChange={this.handleChange}
                        />
                    </div>
                    <div className={'form-group'}>
                        <input type={'text'} placeholder={'Email'}
                               className={'form-control'}
                               name={'email'}
                               value={data.email}
                               onChange={this.handleChange}
                        />
                    </div>
                    <div className={'form-group'}>
                        <input type={'password'} placeholder={'Password'}
                               className={'form-control'}
                               name={'password'}
                               value={data.password}
                               onChange={this.handleChange}
                        />
                    </div>
                    <div className={'form-group'}>
                        <input type={'password'} placeholder={'Confirm Password'}
                               className={'form-control'}
                               name={'confirmPassword'}
                               value={data.confirmPassword}
                               onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label>Gender : </label>
                        <input type={'radio'} value={'Male'}
                            name={'gender'} onChange={this.handleChange}
                               checked={data.gender==='Male' && 'checked'}
                        />Male
                        <input type={'radio'} value={'Female'}
                               name={'gender'} onChange={this.handleChange}
                               checked={data.gender==='Female' && 'checked'}
                        />Female
                    </div>
                    <div className={'form-group'}>
                        <select className={'form-control'}
                                name={'standard'}
                                value={data.standard}
                                onChange={this.handleChange}
                        >
                            <option>1st</option>
                            <option>2nd</option>
                            <option>3rd</option>
                            <option>4th</option>
                            <option>5th</option>
                            <option>6th</option>
                            <option>7th</option>
                            <option>8th</option>
                            <option>9th</option>
                            <option>10th</option>
                        </select>
                    </div>
                    <div className={'form-group'}>
                        <input type={'text'} placeholder={'Contact Number'}
                               className={'form-control'}
                               name={'contactNo'}
                               value={data.contactNo}
                               onChange={this.handleChange}
                        />
                    </div>
                    <div align={'center'}>
                        <button className={'btn btn-dark'} onClick={this.handleRegister}>Register Me</button>
                    </div>
                    <div align={'center'}>
                        <NavLink className={'nav-item'} to={'/login'}>Already have an Account?</NavLink>
                    </div>
                </form>
            </div>
        )
    };
}

const matchDispatchToProps=(dispatch)=>{
    return bindActionCreators({
        studentSignup
    },dispatch)
};
export default connect(null,matchDispatchToProps)(Signup);