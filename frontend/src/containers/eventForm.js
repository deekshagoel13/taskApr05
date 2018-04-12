import React from 'react';
import moment from 'moment';
class EventForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:{}
        }
    }
    addEvent=()=>{
        this.props.addData(this.state.data);
    };
    handleChange=(e)=>{
        const {name,value}=e.target;
        const {data}=this.state;
        data[name] = value;
        this.setState({
            data
        })
    };
    render(){
        const {data}=this.state;
        return(
            <div className="modal fade" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header bg-info">
                            <h4 className="modal-title">Add Event</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className={'form-group'}>
                                    <input className={'form-control'}
                                           type={'text'} placeholder={'Event Name'}
                                           onChange={this.handleChange}
                                           name={'Name'}
                                           value={data.Name}
                                    />
                                </div>
                                <div className={'form-group'}>
                                    <input className={'form-control'}
                                           type={'text'} placeholder={'Location'}
                                           onChange={this.handleChange}
                                           name={'location'}
                                           value={data.location}
                                    />
                                </div>
                                <div className={'form-group'}>
                                    <input className={'form-control'}
                                           type={'date'}
                                           onChange={this.handleChange}
                                           name={'eventDate'}
                                           value={data.eventDate}
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-dark" data-dismiss="modal" onClick={this.addEvent}>Add</button>
                            <button type="button" className="btn btn-dark" data-dismiss="modal">Close</button>
                        </div>

                    </div>
                </div>
            </div>
        )
    };
}
export default EventForm;
