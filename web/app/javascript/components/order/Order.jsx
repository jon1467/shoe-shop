import React from 'react'

import ProductList from '../product/ProductList'
import Status from './Status'

class Order extends React.Component {
  render () {
    return (
      <React.Fragment>
        <h2 className='order__heading'>
          Thank you for shopping at Shoe Shop. Here's your order.
        </h2>
        <Status/>
        <ProductList productList={this.props.order.product_ids.product_list}/>
        <div className='notice-box notice-box--info order__notice-box'>
          Save <a href={window.location.href}>this link</a> to come back and check on your order anytime.
        </div>
      </React.Fragment>
    )
  }
}

export default Order
