import React, { Component } from 'react'
import { connect } from 'react-redux';

class TestComponent extends Component {
  render() {
    return (
      <div>
        <h1>test</h1>
        <h1>the answer is {this.props.data}</h1>
      </div>
    )
  }
}
const MapStateToProps = (state)=>({
    data:state.test.data
})

export default  connect(MapStateToProps)(TestComponent);