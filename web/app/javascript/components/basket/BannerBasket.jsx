import React from 'react'
import ActionCable from 'actioncable'

class BannerBasket extends React.Component {
  constructor () {
    super()

    this.goToBasket = this.goToBasket.bind(this)
    this.updateBasket = this.updateBasket.bind(this)
    this.requestUpdate = this.requestUpdate.bind(this)

    this.establishActionCable = this.establishActionCable.bind(this)
    this.handleReceiveNewData = this.handleReceiveNewData.bind(this)

    this.state = {
      count: 0,
      basket: {}
    }

    this.requestUpdate()
  }

  componentDidMount () {
    this.establishActionCable()
  }

  establishActionCable () {
    const cable = ActionCable.createConsumer('/cable')
    this.sub = cable.subscriptions.create({ channel: 'BasketsChannel', id: this.props.basketID }, {
      received: this.handleReceiveNewData
    })
  }

  handleReceiveNewData (data) {
    switch (data.action) {
      case 'add':
        this.updateBasket(data.basket)
        break
    }
  }

  requestUpdate () {
    fetch('/baskets/index', {
      method: 'GET',
      headers: {
        'X-CSRF-Token': document.querySelector('meta[name=csrf-token]').content
      },
      credentials: 'same-origin'
    }).then(response => response.json().then(basket => {
      this.handleReceiveNewData({ action: 'add', basket })
    }))
  }

  updateBasket (basket) {
    this.setState(s => {
      return {
        basket,
        count: Object.values(basket).reduce((a, b) => a + b, 0)
      }
    })
  }

  goToBasket () {
    window.location.href = this.props.basketURL
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
        {
          this.state.count > 0 &&
          <div className="banner-basket__count" onClick={this.goToBasket}>
            {this.state.count}
          </div>
        }
      </React.Fragment>
    )
  }
}

export default BannerBasket
