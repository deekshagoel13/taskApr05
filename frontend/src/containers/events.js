import React from 'react';
import EventForm from './eventForm';
import moment from 'moment';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import {fetchEvents,addEvents} from '../actions';
class EventList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            events:[]
        }
    }
    componentDidMount(){
        this.props.fetchEvents();
    }
    addEvent=(obj)=>{
        this.props.addEvents(obj);
    };
    render(){
        console.log('render called',this.state.events);
        return(
            <div className={'container'}>
                <EventForm addData={this.addEvent}/>
                <table className={'table table-bordered table-hover'}>
                    <tbody>
                    <tr align={'right'}>
                        <td colSpan={3}>
                            <button className={'btn btn-dark'}
                                    data-toggle="modal" data-target="#myModal"
                        >Add New</button></td>
                    </tr>
                    <tr align={'center'}>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Date</th>
                    </tr>
                    {
                        this.props.events.map((event)=>{
                            return(
                                <tr key={event._id} align={'center'}>
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
        fetchEvents,addEvents,
        goToAdmin:()=>push('/admin')
    },dispatch)
};
export default connect(mapStateToProps,matchDispatchToProps)(EventList);