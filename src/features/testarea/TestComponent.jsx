import React, { Component } from 'react'
import { connect } from 'react-redux';
import {incrementCounter,decrementCounter} from './testActions'
import {Button} from 'semantic-ui-react';


class TestComponent extends Component {
  render() {
    const {incrementCounter,decrementCounter,data} = this.props;
    return (
      <div>
        <h1>test</h1>
        <h1>the answer is {this.props.data}</h1>
        <Button onClick={incrementCounter} color='green' content='Increment'/>
        <Button onClick={decrementCounter} color='red' content='Decrement'/>

      </div>
    )
  }
}
const MapStateToProps = (state)=>({
    data:state.test.data
})

const MapDispatchToProps ={
  incrementCounter,
  decrementCounter
}
export default  connect(MapStateToProps,MapDispatchToProps)(TestComponent);