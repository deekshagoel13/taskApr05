import React from 'react';
import Modal from '../components/modal';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchEvents} from '../actions';
import moment from 'moment';

const Links=(props)=>{
    return(
        <ul className={'navbar bg-dark'}>
            <li></li>
            <button className={'btn btn-light'} onClick={() => {
                localStorage.removeItem('token');
                localStorage.removeItem('userType');
                if(props.onLogout) props.onLogout();
            }}>Logout
            </button>
        </ul>
    )
};
class StudentHome extends React.Component{
    constructor(props){
        super(props);
        this.state={
            events:[],
            event:{}
        }
    }
    componentDidMount(){
       this.props.fetchEvents();
    }
    displayData=(event)=>{
        this.setState({
            event:event
        })
    };
    render(){
        console.log("event",this.state.event);
        return(
            <div>
                <div>
                    <Links onLogout={this.props.onLogout}/>
                </div>
                <div className={'container'}>
                    <Modal data={this.state.event}/>
                    <table className={'table table-bordered table-hover'}><thead>
                    <tr align={'center'}>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Date</th>
                    </tr>
                    </thead>
                        <tbody>
                    {
                        this.props.events.map((event)=>{
                            return(
                                <tr key={event._id} align={'center'}
                                    data-toggle="modal" data-target="#myModal"
                                    onClick={()=>this.displayData(event)}
                                >
                                    <td>{event.Name}</td>
                                    <td>{event.location}</td>
                                    <td>{moment(event.eventDate).format('DD-MM-YYYY')}</td>
                                </tr>
                            )
                        })
                    }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return({
        events:state.events
    })
};
const matchDispatchToProps=(dispatch)=>{
    return bindActionCreators({
        fetchEvents
    },dispatch)
};
export default connect(mapStateToProps,matchDispatchToProps)(StudentHome);