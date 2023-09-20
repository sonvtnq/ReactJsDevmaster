import * as actionTypes from "../constant/constants"

const act_list_product =()=>{
    return{
        type:actionTypes.LIST_PRODUCT,
        
    }
}

const act_buy_product= (product, quantity)=>{
    return{
        type:actionTypes.BUY_ITEM,
        product,
        quantity
    }
}


export {
    act_list_product,
    act_buy_product
}