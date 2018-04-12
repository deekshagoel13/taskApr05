import React from 'react'
import { shallow,mount } from 'enzyme';
import Home from './Home'

describe('<Home />',()=>{

    const props = {
        history: {
            push: jest.fn(),
        }
    };
    it('renders correctly', () => {
        const html = shallow(<Home />).html();
        const expectedHtml = '<div class="block-center mt-xl wd-xl">'+
            '<div class="panel panel-dark panel-flat">'+
            '<div class="panel-heading text-center">'+
            '<a href="#">My Table Choice</a>'+
            '</div>'+
            '<div class="panel-body">'+
            '<form role="form" data-parsley-validate="" novalidate="" class="mb-lg">'+
            '<button type="submit" style="margin-bottom:80px;" id="btnlogin" class="btn btn-block btn-default mt-lg">Login</button>'+
            '<button type="submit" id="btnsignup" class="btn btn-block btn-default mt-lg">Sign Up</button>'+
            '</form>'+
            '</div>'+
            '</div>'+
            '</div>';
        expect(html).toEqual(expectedHtml);
    });

    it('click on Login button',() => {

        const component = shallow(<Home {...props}/>);

        const inst = component.instance();
        const btn = component.find('#btnlogin');

         btn.simulate('click',{preventDefault() {}});

        expect(component.find('#btnlogin')).toHaveLength(1);
        expect(props.history.push).toHaveBeenCalledWith('/login');
    });

    it('click on Signup button',() => {

        const component = shallow(<Home {...props}/>);

        const inst = component.instance();
        const btn = component.find('#btnsignup');

        btn.simulate('click',{preventDefault() {}});

        expect(component.find('#btnsignup')).toHaveLength(1);
        expect(props.history.push).toHaveBeenCalledWith('/signup');
    });
});

