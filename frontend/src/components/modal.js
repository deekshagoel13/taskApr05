import React from 'react';
import moment from 'moment';
const Modal=(props)=>{
        return (
            <div className="modal fade" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header bg-info">
                            <h4 className="modal-title">Event Detail</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body">
                            {
                                props &&
                                <div>
                                    <div><label>Event Name :</label>
                                        {props.data.Name}
                                    </div>
                                    <div><label>Location :</label>
                                        {props.data.location}
                                    </div>
                                    <div><label>Date :</label>
                                        {moment(props.data.eventDate).format('DD-MM-YYYY')}
                                    </div>
                                </div>
                            }
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-dark" data-dismiss="modal">Close</button>
                        </div>

                    </div>
                </div>
            </div>
        )
};
export default Modal;