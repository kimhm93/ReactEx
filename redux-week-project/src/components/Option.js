import React, {Component} from "react";
import {setDiff} from "../actions";

class Option extends Component {
    constructor(props) {
        super(props);
    }
    onChange = (e) => {

        this.props.store.dispatch(setDiff(Number(3)))
    }

    render() {
        return (
            <input type={"text"} value={this.props.store.getState().counter.diff} onChange={()=>this.onChange}/>
        );
    }
}
export default Option;