import React from 'react'
import PropTypes from 'prop-types'

import Button from '../Button'

class Product extends React.Component {
  constructor () {
    super()

    this.addToCart = this.addToCart.bind(this)

    this.state = { loading: false }
  }

  addToCart () {
    this.setState({ loading: true })
    fetch(this.props.addToCartURL, {
      method: 'POST',
      headers: {
        'X-CSRF-Token': document.querySelector('meta[name=csrf-token]').content,
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin',
      body: JSON.stringify({ id: this.props.product.id, basket_id: this.props.basketID })
    }).then(response => response.json().then(data => {
      this.setState({ loading: false })
    }))
  }

  render () {
    return (
      <React.Fragment>
        <div className="product__image-container">
          <img src={this.props.imagePath} alt={this.props.product.title} className="product__image" />
        </div>
        <div className="product__info">
          <div className="product__info-header-group">
            <h2 className="product__title">{this.props.product.title}</h2>
            <h3 className="product__price money">£{this.props.product.price}</h3>
          </div>
          <Button
            extraClasses='button--buy button--product'
            onButtonClick={this.addToCart}
            loaderGIFURL={this.props.loaderGIFURL}
            text='Add To Cart'
            loading={this.state.loading}
          />
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
