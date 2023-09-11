import {createStore} from "redux"
const initialState={
    userName : 'Chung trịnh',
    courseName:'Devmaster',
}

const reducer = (state=initialState,action)=>{
    switch(action.type){
        case 'CHANGE_USER_NAME':
            state.userName=action.userNameNew
            break;
        case '':
            break;
        default:
            return state 
    }

    return state 
}

const store = createStore(reducer);

console.log(store);
console.log("InitialState");
console.log(store.getState());

const actChangeUserName=()=>{
    return{
        type: 'CHANGE_USER_NAME',
        userNameNew: 'Nguyễn Văn Devmaster',
    }
}

store.dispatch(actChangeUserName())
console.log('Changed user name');
console.log(store.getState());

// const actChangeCourseName=()=>{
//     return{
//         type: 'CHANGE_USER_NAME',
//         courseNameNew: 'New Devmaster',
//     }
// }


export default reducer

// const reducer = "1234";


// console.log(reducer);

// export default reducer