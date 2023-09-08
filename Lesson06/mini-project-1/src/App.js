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
      search:'', //Lưu trữ từ khóa cần tìm
      sortBy:'',
      sortType:'ASC',
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
    // console.log(actionName);
  }
  _process = (key) => {
    let { listStudent } = this.state
    switch (this.state.actionName) {
      
      case 'AddNew':
        // console.log(listStudent);
        
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
      case 'Delete':
        // console.log(key);
        // let {listStudent} = this.state 
        const filteredListStudent = listStudent.filter(student => student.studentId !== key.studentId);

        this.setState({ listStudent: filteredListStudent });
        return
      default:
        return
    }
  }
  _search = (value) => {
    // console.log(value);
    this.setState({
      search:value,
    })
  }

  _sort=(value)=>{
    // console.log(value);
    this.setState({
      sortBy:value,
    })
  }

  _sortType=value=>{
    console.log(value);
    this.setState({
      sortType:value,
    })
  }

  render() {
    let { listStudent,search,sortBy,sortType } = this.state;
    if(search !== ''){
      listStudent = listStudent.filter(x=>x.studentName.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
    }
    if(sortType=='ASC'){
      switch(sortBy){
        case 'maSv':
          listStudent.sort((a, b) => a.studentId.localeCompare(b.studentId));
          break;
        case 'tenSv':
          listStudent.sort((a, b) => a.studentName.localeCompare(b.studentName));
          break;
        case 'tuoi':
          listStudent.sort((a, b) => a.age - b.age);
          break;
        case '':
          listStudent.sort((a, b) => a.studentId.localeCompare(b.studentId));
          break;
        default:
          listStudent.sort((a, b) => a.studentId.localeCompare(b.studentId));
          break;
      }
    }else if(sortType=='DESC'){
      switch(sortBy){
        case 'maSv':
          listStudent.sort((b,a) => a.studentId.localeCompare(b.studentId));
          break;
        case 'tenSv':
          listStudent.sort((b,a) => a.studentName.localeCompare(b.studentName));
          break;
        case 'tuoi':
          listStudent.sort((b,a) => a.age - b.age);
          break;
        case '':
          listStudent.sort((b,a) => a.studentId.localeCompare(b.studentId));
          break;
        default:
          listStudent.sort((b,a) => a.studentId.localeCompare(b.studentId));
          break;
      }
    }
    
    
    return (
      <div className="container">
        <Title />
        <div className="row">
          <div className="col-lg-7 grid-margin stretch-card">
            <div className="card">
              <Control onAddOrEditView={this._onAddOrEditView}
                search={this._search}
                sort={this._sort}
                sortType={this._sortType}
              />
              <ListStudent listStudents={listStudent}
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
