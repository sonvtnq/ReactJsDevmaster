import React, { Component } from 'react'
import { Connect, connect } from 'react-redux'

class WelcomeRedux extends Component {
    render() {
        return (
            <div>
                <h3>
                    Xin chào, <span id='userName'>{this.props.userName}</span>
                </h3>
                <h3>
                    Chào mừng bạn đến với khóa học <span id='courseName'>{this.props.courseName}</span> tại Devmaster Academy
                </h3>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        userName: state.userName,
        courseName: state.courseName,
    }
}

export default connect(mapStateToProps,null)(WelcomeRedux)