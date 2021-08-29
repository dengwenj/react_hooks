import React, { PureComponent } from 'react'

export default class UpdateClass extends PureComponent {
  state = {
    count: 0,
  }
  componentDidMount() {
    document.title = this.state.count
  }

  componentDidUpdate() {
    document.title = this.state.count
  }

  render() {
    return (
      <div>
        <h2>当前数字为：{this.state.count}</h2>
        <button onClick={(e) => this.setState({ count: this.state.count + 1 })}>
          +
        </button>
      </div>
    )
  }
}
