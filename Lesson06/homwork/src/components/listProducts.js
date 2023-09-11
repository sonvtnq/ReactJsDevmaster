import React, { Component } from 'react'

export default class ListProducts extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    render() {
        return (
            <div className='list-product'>
                <div className=''>
                    <h2>Danh sách sản phẩm</h2>
                </div>
                <div className='table'>
                    <div className='row row-head'>
                        <div>#</div>
                        <div>ID</div>
                        <div>Name</div>
                        <div>Quantity</div>
                        <div>Price</div>
                        <div>Subtotal</div>
                        <div>Action</div>
                    </div>
                </div>
            </div>
        )
    }
}
