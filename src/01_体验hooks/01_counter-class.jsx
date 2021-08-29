import React, { PureComponent } from 'react'

export default class CounterClass extends PureComponent {
  state = {
    counter: 0,
  }

  jia = () => {
    this.setState((state) => ({
      counter: state.counter + 1,
    }))
  }

  jian = () => {
    this.setState((state) => ({
      counter: state.counter - 1,
    }))
  }

  hh() {
    // 这样不会丢 this  this还是实例对象
    console.log(this)
  }

  render() {
    return (
      <div>
        <h2>当前数字为：{this.state.counter}</h2>
        <button onClick={this.jia}>+</button>
        <button onClick={this.jian}>-</button>
        <button onClick={() => this.hh()}>---</button>
      </div>
    )
  }
}
