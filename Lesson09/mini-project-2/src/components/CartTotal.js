import React, { Component } from 'react'

export default class CartTotal extends Component {
    render() {
        let { renderCarts } = this.props
        // console.log(renderCarts);
        let tongGiaTri=0
        for(let i=0;i<renderCarts.length;i++){
            tongGiaTri += parseFloat(renderCarts[i].product.price) * parseFloat(renderCarts[i].quantity) 
            // console.log(tongGiaTri);
        }
        
        return (
            <>  
            {
                renderCarts.length == 0 ? <tr>
                    <th colSpan={6}>Empty product in your cart</th>
                </tr> : <tr>
                    <td colSpan={4}>
                        There are <b>{renderCarts.length}</b> items in your shopping cart.
                    </td>
                    <td colSpan={2} className="total-price text-left">
                        {(tongGiaTri) } USD
                    </td>
                </tr>
            }
            </>
        )
    }
}
