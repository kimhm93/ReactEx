import React, {useReducer} from "react";
import {Button} from "react-bootstrap";
/*
    Reducer : 통합
 */
// 이벤트, state를 모아서 관리
// action => 이벤트
const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {value:state.value+1};
        case "DECREMENT":
            return {value:state.value-1};
        case "RESET":
            return {value:0};
        default:
            return state;
    }
}
const Counter = () => {
    const [state,dispatch] = useReducer(reducer,{value:0});
    return (
        <div className={"counter"}>
            <p>{state.value}</p>
            <Button onClick={() => dispatch({type:'INCREMENT'})}
                variant={"primary"}
                    className={"counterButton"}
            >+</Button>
            <Button onClick={() => dispatch({type:'DECREMENT'})}
                variant={"success"}
                    className={"counterButton"}
            >-</Button>
            <Button onClick={() => dispatch({type:'RESET'})}
                variant={"danger"}
                    className={"counterButton"}
            >Reset</Button>
        </div>
    )
}

export default Counter;