import React from 'react'

class Button extends React.Component {
  render () {
    return (
      <div
        className={`button ${this.props.extraClasses}`}
        onClick={this.props.onButtonClick}>
        {this.props.loading ? <img className='button__loader' src={this.props.loaderGIFURL}/> : this.props.text}
      </div>
    )
  }
}

export default Button
