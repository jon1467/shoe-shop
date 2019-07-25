import React from 'react'
import ActionCable from 'actioncable'

import ProductBox from './ProductBox'

class ProductGallery extends React.Component {
  constructor (props) {
    super(props)

    this.establishActionCable = this.establishActionCable.bind(this)
    this.handleReceiveNewData = this.handleReceiveNewData.bind(this)

    this.state = {
      products: props.products
    }
  }

  componentDidMount () {
    this.establishActionCable()
  }

  establishActionCable () {
    const cable = ActionCable.createConsumer('/cable')
    this.sub = cable.subscriptions.create({ channel: 'ProductGalleryChannel' }, {
      received: this.handleReceiveNewData
    })
  }

  handleReceiveNewData (data) {
    switch (data.action) {
      case 'update_gallery':
        this.setState({ products: data.products })
        break
    }
  }

  render () {
    return (
      <div className="products">
        {this.state.products.map(listItem => {
          return <ProductBox {...listItem} key={listItem.product.id}/>
        })}
      </div>
    )
  }
}

export default ProductGallery
