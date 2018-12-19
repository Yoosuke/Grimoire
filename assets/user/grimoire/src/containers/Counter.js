import React, { Component } from "react";

const Count = () => (<Counter></Counter>)

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = { count: 0 }
    }

    handlePlusButton = () => {
        console.log(this.state.count)
        this.setState({ count: this.state.count + 1})
    }

    handleMinusButton = () => {
        console.log(this.state.count)
        this.setState({ count: this.state.count - 1 })
    }

    render() {
        return <React.Fragment>
            <div>count: {this.state.count}</div>
            <button onClick={this.handlePlusButton}>+1</button>
            <button onClick={this.handleMinusButton}>-1</button>
          </React.Fragment>;
    }
}

export default Count;