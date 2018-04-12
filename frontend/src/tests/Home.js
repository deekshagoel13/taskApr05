import React, { Component } from 'react';
export default class Home extends React.Component {
    constructor(props) {
        super(props);
        const self = this;
        this.state = {};
    }
    _login(e){
        e.preventDefault();
        this.context.router.push('/login')
    }
    _signup(e){
        e.preventDefault();
        this.context.router.push('/signup')
    }
    render() {
        return (
            <div className="block-center mt-xl wd-xl">
                { /* START panel */ }
                <div className="panel panel-dark panel-flat">
                    <div className="panel-heading text-center">
                        <a href="#">
                            My Table Choice
                        </a>
                    </div>
                   <div className="panel-body">
                        <form role="form" data-parsley-validate="" noValidate className="mb-lg">
                              <button type="submit" style={{marginBottom:'80px'}} id="btnlogin" onClick={this._login.bind(this)} className="btn btn-block btn-default mt-lg">Login</button>
                               <button type="submit" id="btnsignup" onClick={this._signup.bind(this)} className="btn btn-block btn-default mt-lg">Sign Up</button>
                        </form>
                    </div>
                </div>     
            </div>
               
        );
    }
}
Home.contextTypes= {
    router: React.PropTypes.object.isRequired
};


