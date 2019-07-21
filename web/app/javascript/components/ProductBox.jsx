import React from 'react'
import PropTypes from 'prop-types'

class ProductBox extends React.Component {
  constructor () {
    super()

    this.goToProductPage = this.goToProductPage.bind(this)
  }

  goToProductPage () {
    window.location.href = this.props.productURL
  }

  render () {
    return (
      <div className="product-box" onClick={this.goToProductPage}>
        <div className="product-box__image-container">
          <img src={this.props.imagePath} alt="..." className="product-box__image" />
        </div>
        <div className="product-box__info">
          <div className="product-box__title">{this.props.title}</div>
          <div className="product-box__price">£{this.props.price}</div>
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
