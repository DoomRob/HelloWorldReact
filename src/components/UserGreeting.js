import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isSignedIn: false
      }
    }

  render() {

    return this.state.isSignedIn && <div>Welcome Robert</div>

    // return this.state.isSignedIn ? (
    //     <div>Welcome Robert</div> 
    // ) : (
    //     <div>Welcome Guest</div>
    // )

    // let message
    // if (this.state.isSignedIn) {
    //     message = <div>Welcome Robert</div>
    // } else {
    //     message = <div>Welcome Guest</div>
    // }

    // return <div>{message}</div>

    // if (this.state.isSignedIn) {
    //     return (<div>Welcome Robert</div>)
    // }
    // else {
    //     return (<div>Welcome Guest</div>)
    // }

    // return (
    //   <div>
    //     <div>Welcome Robert</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // )
  }
}

export default UserGreeting