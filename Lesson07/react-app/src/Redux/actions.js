import * as types from './constant'

const actChangeUserName=value=>{
    return{
        type: types.CHANGE_USERNAME,
        data:value,
    }
}
const actChangeCourseName=value=>{
    return{
        type: types.CHANGE_COURSE_NAME,
        data:value,
    }
}

export{
    actChangeCourseName,
    actChangeUserName,
}