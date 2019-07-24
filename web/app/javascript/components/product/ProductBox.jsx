import React from 'react'
import PropTypes from 'prop-types'

class ProductBox extends React.Component {
  constructor () {
    super()

    this.goToProductPage = this.goToProductPage.bind(this)
    this.getStockWarning = this.getStockWarning.bind(this)
  }

  goToProductPage () {
    window.location.href = this.props.productURL
  }

  getStockWarning () {
    let stockWarning
    if (this.props.product.stock < 3) {
      stockWarning = (<div className="product-box__stock-box product-box__stock-box--warning">Only {this.props.product.stock} remaining!</div>)
    }
    if (this.props.product.stock === 0) {
      stockWarning = <div className="product-box__stock-box product-box__stock-box--oos">Out of Stock</div>
    }
    return stockWarning
  }

  render () {
    const stockWarning = this.getStockWarning()

    return (
      <div className="product-box" onClick={this.goToProductPage}>
        {stockWarning}
        <div className="product-box__image-container">
          <img src={this.props.imagePath} alt={this.props.product.title} className="product-box__image" />
        </div>
        <div className="product-box__info">
          <div className="product-box__title">{this.props.product.title}</div>
          <div className="product-box__price money">£{this.props.product.price}</div>
        </div>
      </div>
    )
  }
}

ProductBox.propTypes = {
  title: PropTypes.string,
  price: PropTypes.string,
  imagePath: PropTypes.string
}
export default ProductBox
