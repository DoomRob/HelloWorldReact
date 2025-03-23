import React, { Component } from 'react'
import WithCounter from './WithCounter'

class ClickCounter extends Component {

  render() {
    const { count, incrementCount} = this.props
    return (
    <button onClick={incrementCount}>
       {this.props.name} Cicked {count} Times
    </button>
    )
  }
}

export default WithCounter(ClickCounter, 5)
