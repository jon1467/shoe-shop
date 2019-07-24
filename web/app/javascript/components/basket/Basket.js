import React from 'react'

import ProductList from '../product/ProductList'
import Button from '../Button'

class Basket extends React.Component {
  constructor () {
    super()

    this.goToPage = this.goToPage.bind(this)
    this.createOrder = this.createOrder.bind(this)

    this.state = { loading: false }
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

  render () {
    let button
    if (!this.listIsEmpty()) {
      button = <Button
        extraClasses='basket__buy-button button--buy'
        text='Purchase'
        onButtonClick={this.createOrder}
        loading={this.state.loading}
        loaderGIFURL={this.props.loaderGIFURL}
      />
    }

    return (
      <React.Fragment>
        <ProductList productList={this.props.productList}/>
        {button}
      </React.Fragment>
    )
  }
}

export default Basket
