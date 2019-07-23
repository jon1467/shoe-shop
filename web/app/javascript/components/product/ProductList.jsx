import React from 'react'
import PropTypes from 'prop-types'

import ProductListItem from './ProductListItem'

class ProductList extends React.Component {
  constructor (props) {
    super(props)

    this.total = this.total.bind(this)

    this.state = {}
    this.state.productList = Object.entries(props.productList).map(([index, listItem]) => {
      return {
        product: listItem['product'],
        quantity: listItem['quantity'],
        imagePath: listItem['imagePath'],
        productPath: listItem['productPath']
      }
    })
  }

  total () {
    const reducer = (acc, value) => {
      return acc + value.quantity * parseFloat(value.product.price)
    }
    return this.state.productList.reduce(reducer, 0)
  }

  render () {
    if (Object.entries(this.props.productList).length === 0) {
      return <React.Fragment>Your basket is empty.</React.Fragment>
    }
    return (
      <React.Fragment>
        {this.state.productList.map((listItem, index) => {
          return <ProductListItem {...listItem} key={index}/>
        })}
        <div className="product-list__total money">£{this.total()}</div>
      </React.Fragment>
    )
  }
}

ProductList.propTypes = {
  title: PropTypes.string,
  price: PropTypes.string,
  imagePath: PropTypes.string
}
export default ProductList
