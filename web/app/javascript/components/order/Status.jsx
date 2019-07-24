import React from 'react'

// TODO Support changing states, customisable text/state nums
class Status extends React.Component {
  render () {
    return (
      <div className='status'>
        <div className='status__line'>
          <div className='status__blob status__blob--one status__blob--active'>
            <div className='status__blob-text'>Order Received</div>
          </div>
          <div className='status__blob status__blob--two'>
            <div className='status__blob-text'>Package Sent</div>
          </div>
          <div className='status__blob status__blob--three'>
            <div className='status__blob-text'>Out For Delivery</div>
          </div>
          <div className='status__blob status__blob--four'>
            <div className='status__blob-text'>Delivered</div>
          </div>
          <div className='status__progress-line status__progress-line--one status__progress-line--active'/>
          <div className='status__progress-line status__progress-line--two'/>
          <div className='status__progress-line status__progress-line--three'/>
        </div>
      </div>
    )
  }
}

export default Status
