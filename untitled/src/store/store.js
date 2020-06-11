import {createStore,applyMiddleware,compose} from "redux";
import thunk from "redux-thunk";
import rootReducer from '../reducers';
import {createLogger} from 'redux-logger/src';

const logger=createLogger(); // 이전데이터와 바뀐데이터가 console에 출력됨 applyMiddleware(동기화와 비동기화를 설정해주는 라이브러리)

const initialState={};
const middleware=[thunk,logger];

const store=createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        /*window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX.DEVTOOLS_EXTENSION__() // 모니터링을 하게 해주는 툴*/
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

    )
)

export default store;
