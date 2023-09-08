import React, { Component } from 'react'

export default class Student extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    render() {
        // console.log(this.props.student.sex);
        let student=this.props.student;
        const show=(key)=>{
            // this.props.showStudent(key);
            // console.log(key);
            this.props.onAddOrEditView(true,"Close",key)
        }

        const update=key=>{
            this.props.onAddOrEditView(true,"Update",key)
        }
        const deleteStudent=key=>{
            this.props.onAddOrEditView(true,"Delete",key)
            // console.log('delete');
        }
        return (

            <tr>
                <td>{this.props.stt}</td>
                <td>{student.studentId}</td>
                <td>{student.studentName}</td>
                <td>{this.props.student.age}</td>
                <td>{student.sex?'Nam':'Nữ'}</td>
                <td>
                    <div className="template-demo">
                        <button
                            type="button"
                            className="btn btn-danger btn-icon-text"
                            onClick={()=>show(student)}
                        >
                            Xem
                        </button>
                        <button
                            type="button"
                            className="btn btn-warning btn-icon-text"
                            onClick={()=>update(student)}
                        >
                            Sửa
                        </button>
                        <button
                            type="button"
                            className="btn btn-success btn-icon-text"
                            onClick={()=>deleteStudent(student)}
                        >
                            Xóa
                        </button>
                    </div>
                </td>
            </tr>

        )
    }
}
