import React from 'react'
import PropTypes from 'prop-types'
import ActionCable from 'actioncable'

import Button from '../Button'

class Product extends React.Component {
  constructor (props) {
    super(props)

    this.addToCart = this.addToCart.bind(this)
    this.establishActionCable = this.establishActionCable.bind(this)
    this.handleReceiveNewData = this.handleReceiveNewData.bind(this)

    this.state = {
      loading: false,
      product: props.product
    }
  }

  componentDidMount () {
    this.establishActionCable()
  }

  establishActionCable () {
    const cable = ActionCable.createConsumer('/cable')
    this.sub = cable.subscriptions.create({
      channel: 'ProductChannel',
      id: this.props.product.id
    },
    { received: this.handleReceiveNewData })
  }

  handleReceiveNewData (data) {
    switch (data.action) {
      case 'update':
        this.setState({ product: data.product })
        break
    }
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
      body: JSON.stringify({ id: this.state.product.id, basket_id: this.props.basketID })
    }).then(response => response.json().then(data => {
      this.setState({ loading: false })
    }))
  }

  render () {
    let buyButton
    if (this.state.product.stock > 0) {
      buyButton = (<Button
        extraClasses='button--buy product-button'
        onButtonClick={this.addToCart}
        loaderGIFURL={this.props.loaderGIFURL}
        text='Add To Cart'
        loading={this.state.loading}
      />)
    } else {
      buyButton = (<Button
        extraClasses='button--disabled product-button'
        text='Out of Stock'
        loading={this.state.loading}
      />)
    }

    return (
      <React.Fragment>
        <div className="product__image-container">
          <img src={this.props.imagePath} alt={this.state.product.title} className="product__image" />
        </div>
        <div className="product__info">
          <div className="product__info-header-group">
            <h2 className="product__title">{this.state.product.title}</h2>
            <h3 className="product__price money">£{this.state.product.price}</h3>
          </div>
          {buyButton}
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
