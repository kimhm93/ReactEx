import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from "./components/Menu";
import BoxOffice from "./components/BoxOffice";
/*
  Redux
  =====
    1) View(React화면) => action 발생 (이벤트 발생)
    2) 이벤트의 종류 => dispatch(이벤트 종류)
                       dispatch({type:'INCREMENT'}
    3) reducer => (cState, action)
          action => 처리 ==> cState<=nState
    4) 저장 ==> store
    5) 필요한 컴포넌트에서 ==> store에 데이터 출력
    
  Redux를 사용
  ============
  1. store 새엉
  2. action 등록
  3. reducer에서 처리
  4. react에서 state를 가지고 오는 방법
 */
function App(store) {
  return (
    <React.Fragment>
      <Menu store={store}/>
      <BoxOffice store={store}/>
    </React.Fragment>
  );
}

export default App;
