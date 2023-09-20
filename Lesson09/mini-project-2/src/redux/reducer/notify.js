import * as actionTypes from "../constant/actionTypes"
import * as messages from "../constant/mesage"

const initialState=messages.MSG_LOAD_SUCESS

const notifyReducer =(state= initialState, action)=>{
    
    switch(action.type){
        case actionTypes.CHANGE_NOTIFY:
            state=action.payload;
            return state;
        default:
            return state;
    }
}

export default notifyReducer