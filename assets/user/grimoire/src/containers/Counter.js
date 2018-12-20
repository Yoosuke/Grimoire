import React, { Component } from "react";
/**Core components */
import { connect } from 'react-redux';
/**actions */
import { increment, decrement } from '../actions';

/** Reducrを利用した場合 */
class Count extends Component {
    render(){
        const props = this.props

        return(
            <React.Fragment>
                <div>value: { props.value }</div>
                <button onClick={props.increment}>+1</button>
                <button onClick={props.decrement}>-1</button>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({ value: state.count.value })
const mapDispatchToProps = dispatch => ({
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement())
})
export default connect(mapStateToProps, mapDispatchToProps)(Count)

/* stateを利用した場合
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
*/