import * as actionTypes from "../constant/actionTypes"

const act_list_product =()=>{
    return{
        type:actionTypes.LIST_PRODUCT,
        
    }
}

const act_buy_product= (product, quantity)=>{
    // console.log(product, quantity);
    return{
        type:actionTypes.BUY_ITEM,
        product,
        quantity
    }
}
const act_delete_product= (product)=>{
    // console.log(product, quantity);
    return{
        type:actionTypes.DELETE_ITEM,
        product,
    }
}

const act_update_product = (product,quantity)=>{
    return{
        type: actionTypes.UPDATE_ITEM,
        product,
        quantity
    }
}

//action cho chức năng thông báo

const act_change_notify= (content) =>{
    // console.log(content);
    return{
        type: actionTypes.CHANGE_NOTIFY,
        payload:content,
    }
}


export {
    act_list_product,
    act_buy_product,
    act_change_notify,
    act_delete_product,
    act_update_product
}