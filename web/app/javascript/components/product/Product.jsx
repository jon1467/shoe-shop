import React from 'react'
import PropTypes from 'prop-types'

class Product extends React.Component {
  constructor () {
    super()

    this.addToCart = this.addToCart.bind(this)
  }

  addToCart () {
    fetch(this.props.addToCartURL, {
      method: 'POST',
      headers: {
        'X-CSRF-Token': document.querySelector('meta[name=csrf-token]').content,
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin',
      body: JSON.stringify({ id: this.props.id })
    }).then(response => response.json().then(data => { console.log(data) }))
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
          <div className="button button--buy button--product" onClick={this.addToCart}>Add To Cart</div>
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
