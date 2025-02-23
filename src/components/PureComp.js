import React, { PureComponet } from 'react'

class PureComp extends PureComponet {
  render() {
    console.log('**************Pure Comp**********************')
    return (
      <div>
        Pure Component {this.props.name}
      </div>
    )
  }
}

export default PureComp