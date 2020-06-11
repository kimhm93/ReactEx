import React, {Component} from "react";
import {decrement, increment} from "../actions";

class Button extends Component {
    constructor(props) {
        super(props);
    }
    onIncrement() {
        this.props.store.dispatch(increment());
        // reducer로 전송 => state=> 값을 증가
    }
    onDecrement() {
        this.props.store.dispatch(decrement());
    }
    render() {
        return (
            <div>
                <button onClick={()=>this.onIncrement()}>+</button>
                <button onClick={()=>this.onDecrement()}>-</button>
            </div>
        )
    }
}
export default Button;