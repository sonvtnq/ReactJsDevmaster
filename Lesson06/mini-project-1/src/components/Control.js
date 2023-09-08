import React, { Component } from 'react'

export default class Control extends Component {
    constructor(props){
        super(props)
        this.state={
            searchValue:''
        }
    }
    //hàm xử lý sự kiện khi người dung ấn vào nút thêm
    student={
        studentId: "", 
        studentName: "", 
        age: "", 
        sex: "", 
        birthDate: "", 
        birthPlace: "", 
        address: "" 
    }
    handleAdd=()=>{
        this.props.onAddOrEditView(true,"AddNew",this.student)
        // console.log(1);
        // console.log((this.props.onAddOrEditView));
    }
    _onChange=e=>{
        // console.log(e.target.value)
        this.setState({
            searchValue:e.target.value
        })
    }
    _sort=(e)=>{
        // console.log(e.target.value);
        this.props.sort(e.target.value)
    }
    _sortType=e=>{
        this.props.sortType(e.target.value)
    }
    handleSubmit=e=>{
        e.preventDefault()
        // console.log(this.state.searchValue);
        this.props.search(this.state.searchValue)
    }
    render() {
        return (
            <div className="card-header">
                <div className="row">
                    <div className="col-3 ">
                        <button type="button" className="w-75 btn btn-primary btn-icon-text"
                            onClick={this.handleAdd}
                        >
                            Thêm mới sinh viên
                        </button>
                    </div>
                    <div className="col-4 ">
                        <form className="search-form" action="#">
                            <i className="icon-search" />
                            <input
                                type="search"
                                className="form-control"
                                placeholder="Search Here"
                                title="Search here"
                                onChange={this._onChange}
                            />
                            <button className="btn btn-primary btn-icon-text"
                                onClick={this.handleSubmit}
                            >
                                Tìm kiếm
                            </button>
                        </form>
                    </div>
                    <div className='col-2 d-flex align-items-center justify-content-end'>
                        Sắp xếp:
                    </div>
                    <div className="col-2 d-flex align-items-center">
                        <select className="form-control"
                            onChange={this._sort}
                        >
                            <option value="">Sắp xếp</option>
                            <option value="maSv">Mã sinh viên</option>
                            <option value="tenSv">Tên sinh viên</option>
                            <option value="tuoi">Tuổi</option>
                        </select>
                    </div>
                    <div className="col-1 d-flex align-items-center">
                        <select className="form-control"
                            onChange={this._sortType}
                        >
                            <option value="ASC">ASC</option>
                            <option value="DESC">DESC</option>
                        </select>
                    </div>
                    
                </div>
            </div>
        )
    }
}
