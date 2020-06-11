import React, {Component} from "react";
/*
    combinedreducers에서 state를 묶어준다.
    {this.props.store.getState().counter.value} 에서 counter는 database, counter는 table(reducer)이라 생각하면 된다.
 */
class Counter extends Component {
    render() {
        return (
            <div>
                <h1>Value:{this.props.store.getState().counter.value}</h1>
            </div>
        )
    }
}
export default Counter;