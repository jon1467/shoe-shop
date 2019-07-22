import React from 'react'
import PropTypes from 'prop-types'

class ProductListItem extends React.Component {
  constructor () {
    super()

    this.goToProductPage = this.goToProductPage.bind(this)
  }

  goToProductPage () {
    window.location.href = this.props.product.productURL
  }

  render () {
    return (
      <div className="product-list-item">
        <div className="product-list-item__image-container">
          <img src={this.props.imagePath} alt={this.props.product.title} className="product-list-item__image" />
        </div>
        <div className="product-list-item__info">
          <div className="product-list-item__title">{this.props.product.title}</div>
          <div className="product-list-item__price">£{this.props.product.price}</div>
        </div>
        <div className="product-list-item__quantity">{this.props.quantity}</div>
      </div>
    )
  }
}

ProductListItem.propTypes = {
  title: PropTypes.string,
  price: PropTypes.string,
  imagePath: PropTypes.string
}
export default ProductListItem
