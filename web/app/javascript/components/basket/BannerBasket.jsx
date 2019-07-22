import React from 'react'

class BannerBasket extends React.Component {
  constructor () {
    super()

    this.goToBasket = this.goToBasket.bind(this)
  }

  goToBasket () {
    window.location.href = '/shopping_carts/product_list'
  }

  render () {
    return (
      <React.Fragment>
        <img
          src={this.props.imagePath}
          alt="basket"
          className="banner-basket__image"
          onClick={this.goToBasket}
        />
      </React.Fragment>
    )
  }
}

export default BannerBasket
