import React from 'react'

import ProductList from '../product/ProductList'
import Button from '../Button'

class Basket extends React.Component {
  constructor () {
    super()

    this.goToPage = this.goToPage.bind(this)
    this.createOrder = this.createOrder.bind(this)
    this.clearBasket = this.clearBasket.bind(this)

    this.state = {
      loading: false,
      clearing: false
    }
  }

  goToPage (url) {
    window.location.href = url
  }

  listIsEmpty () {
    return Object.entries(this.props.productList).length === 0 &&
      this.props.productList.constructor === Object
  }

  createOrder () {
    this.setState({ loading: true })
    fetch(this.props.createOrderURL, {
      method: 'POST',
      headers: {
        'X-CSRF-Token': document.querySelector('meta[name=csrf-token]').content,
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin',
      body: JSON.stringify({ product_list: this.props.productList })
    }).then(response => {
      if (response.redirected) this.goToPage(response.url)
    })
  }

  clearBasket () {
    this.setState({ clearing: true })
    fetch(this.props.clearBasketURL, {
      method: 'DELETE',
      headers: {
        'X-CSRF-Token': document.querySelector('meta[name=csrf-token]').content
      },
      credentials: 'same-origin'
    }).then(response => {
      if (response.redirected) this.goToPage(response.url)
    })
  }

  render () {
    let buyButton, clearButton
    if (!this.listIsEmpty()) {
      buyButton = <Button
        extraClasses='basket__buy-button button--buy'
        text='Purchase'
        onButtonClick={this.createOrder}
        loading={this.state.loading}
        loaderGIFURL={this.props.loaderGIFURL}
      />
      clearButton = <Button
        extraClasses='basket__clear-button button--destroy'
        text='Clear Basket'
        onButtonClick={this.clearBasket}
        loading={this.state.clearing}
        loaderGIFURL={this.props.loaderGIFURL}
      />
    }

    return (
      <React.Fragment>
        <ProductList productList={this.props.productList}/>
        <div className="button-group basket__buttons">
          {clearButton}
          {buyButton}
        </div>
      </React.Fragment>
    )
  }
}

export default Basket
