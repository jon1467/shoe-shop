import React from 'react'
import PropTypes from 'prop-types'

import ProductListItem from './ProductListItem'

class ProductList extends React.Component {
  constructor () {
    super()

    this.goToProductPage = this.goToProductPage.bind(this)
  }

  goToProductPage () {
    window.location.href = this.props.productURL
  }

  render () {
    if (Object.entries(this.props.productList).length === 0) {
      return <React.Fragment>Your basket is empty.</React.Fragment>
    }

    return (
      <React.Fragment>
        {Object.entries(this.props.productList).map(([index, listItem]) => {
          return (
            <ProductListItem
              product={listItem['product']}
              quantity={listItem['quantity']}
              imagePath={listItem['imagePath']}
              productPath={listItem['productPath']}
              key={index}
            />
          )
        })}
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
