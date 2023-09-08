import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // student:{
            //     studentId: "", 
            //     studentName: "", 
            //     age: "", 
            //     sex: "", 
            //     birthDate: "", 
            //     birthPlace: "", 
            //     address: "" 
            // }
            student: this.props.studentRendered
        }
    }
    componentDidUpdate(prevProps) {
        if (this.props.studentRendered !== prevProps.studentRendered) {
            this.setState({
                student: this.props.studentRendered,
            });
        }
    }
    _onChange = e => {
        const { name, value } = e.target;
        this.setState({
            ...this.state,
            student: {
                ...this.state.student,
                [name]: value
            }
        });
    }
    handleSubmit = e => {
        e.preventDefault()
        this.props.process(this.state.student)
    }
    render() {
        return (
            <div
                // className={`card ${this.props.isToggle?'':'d-none'}`}
                className='card'
            >
                <div className="card-body">
                    <h3 className="card-title">Thông tin sinh viên</h3>
                    <form className="form-sample">
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Mã sinh viên</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control"
                                    value={this.state.student.studentId}
                                    onChange={this._onChange}
                                    name='studentId'
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Tên sinh viên</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control"
                                    value={this.state.student.studentName}
                                    onChange={this._onChange}
                                    name='studentName'
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Tuổi</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control"
                                    value={this.state.student.age}
                                    onChange={this._onChange}
                                    name='age'
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Giới tính</label>
                            <div className="col-sm-9">
                                <select className="form-control"
                                    style={{ color: '#000' }}
                                    value={this.state.student.sex}
                                    onChange={this._onChange}
                                    name='sex'
                                >
                                    <option>Nam</option>
                                    <option>Nữ</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Ngày sinh</label>
                            <div className="col-sm-9">
                                <input type='date' className="form-control" placeholder="dd/mm/yyyy"
                                    value={this.state.student.birthDate}
                                    onChange={this._onChange}
                                    name='birthDate'
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Nơi sinh</label>
                            <div className="col-sm-9">
                                <select className="form-control"
                                    style={{ color: '#000' }}
                                    value={this.state.student.birthPlace}
                                    onChange={this._onChange}
                                    name='birthPlace'
                                >
                                    <option>Hà Nội</option>
                                    <option>TP. Hồ Chí Minh</option>
                                    <option>Đà Nẵng</option>
                                    <option>Quảng Ninh</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Địa chỉ</label>
                            <div className="col-sm-9">
                                <textarea className="form-control" defaultValue={""}
                                    value={this.state.student.address}
                                    onChange={this._onChange}
                                    name='address'
                                />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary me-2"
                            onClick={this.handleSubmit}
                        >
                            {this.props.actionName}
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}
