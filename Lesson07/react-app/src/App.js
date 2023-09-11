
import { connect } from 'react-redux';
import './App.css';
import WelcomeRedux from './components/WelcomeRedux';
import {actChangeCourseName,actChangeUserName} from './Redux/actions'
import { Component } from 'react';
// import reducer from './ReduxDemo';

class App extends Component {
  inputChangeUserName=e=>{
    this.props.changeUserName(e.target.value)
  }
  inputChangeCourseName=e=>{
    this.props.changeCourseName(e.target.value)
  }
  render(){
    return (
    <div className="App">
      <h1>Welcome to Redux</h1>
      <div className='input'>
        <p>Change UserName</p>
        <input type='text'
          onChange={this.inputChangeUserName}
        />
      </div>
      <div className='input'>
        <p>Change CourseName</p>
        <input type='text'
          onChange={this.inputChangeCourseName}
        />
      </div>
      <WelcomeRedux/>
    </div>
  );
  }
  
}

const mapDispatchToProps=dispatch=>{
  return{
    changeUserName:(value)=>{
      dispatch(actChangeUserName(value))
    },
    changeCourseName:(value)=>{
      dispatch(actChangeCourseName(value))
    },
  }
}

export default connect(null,mapDispatchToProps)(App);
