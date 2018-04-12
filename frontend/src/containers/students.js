import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchStudents} from '../actions';
class StudentList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            students:[]
        }
    }
    componentDidMount(){
        this.props.fetchStudents();
    }
    render(){
        return(
            <div className={'container'}>
                <table className={'table table-bordered table-hover'}><thead>
                <tr align={'center'}>
                    <th>Name</th>
                    <th>Standard</th>
                    <th>Gender</th>
                    <th>Contact No.</th>
                </tr>
                </thead>
                    <tbody>
                    {
                        this.props.students.map((student)=>{
                            return(
                                <tr key={student._id} align={'center'}>
                                    <td>{student.Name}</td>
                                    <td>{student.standard}</td>
                                    <td>{student.gender}</td>
                                    <td>{student.contactNo}</td>
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
        students:state.students
    })
};
const matchDispatchToProps=(dispatch)=>{
    return bindActionCreators({
        fetchStudents
    },dispatch)
};
export default connect(mapStateToProps,matchDispatchToProps)(StudentList);