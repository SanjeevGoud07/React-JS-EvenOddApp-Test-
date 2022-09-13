// Write your code here
import './index.css'

import {Component} from 'react'

class EvenOddApp extends Component {
  state = {count: 0, Type: 'Even'}

  onInc = () => {
    // const {count, Type} = this.state
    this.setState(prevState => {
      console.log('Hi')
      const C = parseInt(prevState.count + Math.random() * 100)
      if (C % 2 === 0) {
        return {count: C, Type: 'Even'}
      }
      return {count: C, Type: 'Odd'}
    })
  }

  render() {
    const {count, Type} = this.state
    return (
      <div className="container">
        <h1 className="heading">Count {count}</h1>
        <p className="para">Count is {Type}</p>
        <button type="button" onClick={this.onInc}>
          Increment
        </button>
        <p>*Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
