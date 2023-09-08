import React, { Component } from 'react'
import Student from './Student'

export default class ListStudent extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    _onAddOrEditView=(isToggle,actionName,student)=>{
        this.props.onAddOrEditView(isToggle,actionName,student)
    }
    
    render() {
        // console.log(this.props);
        let renderStudent=this.props.listStudents;
        // console.log(renderStudent);
        let elementStudent=renderStudent.map((item,index)=>{
            return <Student key={index} stt={index+1} student={item} 
                // showStudent={this.showStudent} 
                onAddOrEditView={this._onAddOrEditView}
            />
        })
        return (
            <div className="card-body">
                <h3 className="card-title">Danh sách sinh viên</h3>
                <div className="table-responsive pt-3">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Mã sinh viên</th>
                                <th>Tên sinh viên</th>
                                <th>Tuổi</th>
                                <th>Giới tính</th>
                                <th>Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                           {elementStudent}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
