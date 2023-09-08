import './App.css';
import Title from './components/Title';
import Control from './components/Control';
import ListStudent from './components/ListStudent';
import Form from './components/Form';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listStudent: [
        { studentId: "SV001", studentName: "Nguyễn Văn A", age: 20, sex: true, birthDate: "2002-04-23", birthPlace: "HN", address: "25, Vũ Ngọc Phan" },
        { studentId: "SV002", studentName: "Nguyễn Văn B", age: 21, sex: false, birthDate: "2001-09-09", birthPlace: "ĐN", address: "1, Ngô Quyền" },
        { studentId: "SV003", studentName: "Nguyễn Văn C", age: 19, sex: true, birthDate: "2003-07-07", birthPlace: "HCM", address: "1, Lý Tự Trọng" },
        { studentId: "SV004", studentName: "Nguyễn Văn D", age: 29, sex: false, birthDate: "2005-07-07", birthPlace: "HCM", address: "1, Lý Tự Trọng" },
      ],
      isToggle: false,
      actionName: '',
      student: {},
    }
  }
  _onAddOrEditView = (isToggle, actionName, student) => {
    this.setState({
      ...this.state,
      isToggle: isToggle,
      actionName: actionName,
      student: student,
    })
    // console.log(isToggle);
    // console.log(student);
  }
  _process = (key) => {
    switch (this.state.actionName) {
      case 'AddNew':
        // console.log(student);
        let { listStudent } = this.state
        listStudent.push(key)
        this.setState({
          ...this.state,
          listStudent: listStudent
        })
        return
      case 'Close':
        this.setState({
          ...this.state,
          isToggle: false,
        })
        return
      case 'Update':
        // console.log(key);
        let listStudents = this.state.listStudent
        for (let i = 0; i < listStudents.length; i++) {
          // console.log(this.state.listStudent[i]);
          if (listStudents[i].studentId == key.studentId) {
            listStudents[i] = key;
            break;
          }
        }
        this.setState({
          ...this.state,
          listStudent: listStudents,
          isToggle: false,
        })
        // console.log(listStudents);
        return
      default:
        return
    }
  }
  _search = (value) => {
    const filteredData = this.state.listStudent.filter(item =>
      Object.values(item).some(itemValue =>
        itemValue.toString().toLowerCase().includes(value.toLowerCase())
      )
    );
    console.log(filteredData);
    // listStudentShow=filteredData
  }

  _sort=()=>{
    
  }

  render() {
    let { student } = this.state.listStudent;
    return (
      <div className="container">
        <Title />
        <div className="row">
          <div className="col-lg-7 grid-margin stretch-card">
            <div className="card">
              <Control onAddOrEditView={this._onAddOrEditView}
                search={this._search}
              />
              <ListStudent listStudents={this.state.listStudent}
                onAddOrEditView={this._onAddOrEditView}
              />
            </div>
          </div>
          <div className="col-5 grid-margin">
            {
              this.state.isToggle ?
                <Form actionName={this.state.actionName}
                  studentRendered={this.state.student}
                  onAddOrEditView={this._onAddOrEditView}
                  process={this._process}
                /> : ''
            }
          </div>
        </div>

      </div>
    );
  }

}

export default App;
