import * as types from './constant'
const initialState={
    userName:'Chung Trịnh',
    courseName:'Devmaster',
}  

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case types.CHANGE_COURSE_NAME:
            return{
                ...state,
                courseName:action.data,
            }
        case types.CHANGE_USERNAME:
            return{
                ...state,
                userName:action.data,
            }
        default:
            return state
    }
}

export default reducer
