import React from 'react'
import PropTypes from 'prop-types'

class Product extends React.Component {
  constructor () {
    super()

    this.addToBasket = this.addToBasket.bind(this)
  }

  addToBasket () {
    console.log(`add to basket: ${this.props.title}`)
  }

  render () {
    return (
      <React.Fragment>
        <div className="product__image-container">
          <img src={this.props.imagePath} alt={this.props.title} className="product__image" />
        </div>
        <div className="product__info">
          <div className="product__info-header-group">
            <h2 className="product__title">{this.props.title}</h2>
            <h3 className="product__price">£{this.props.price}</h3>
          </div>
          <div className="button button--buy button--product" onClick={this.addToBasket}>Add To Cart</div>
        </div>
      </React.Fragment>
    )
  }
}

Product.propTypes = {
  title: PropTypes.string,
  price: PropTypes.string,
  imagePath: PropTypes.string
}
export default Product
