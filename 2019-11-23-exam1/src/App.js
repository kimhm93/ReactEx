import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
/*
  실행하는 순서
    1) index.js => 클래스를 호출 => render 의 리턴값을 받아서 브라우저로 전송
      ReactDOM.render(<App />, document.getElementById('root'));
      ==============
      App의 클래스 호출
      pulic/index.html에 component들이 바인딩 된다.
    2)

 */
class App extends Component {
  // 화면 출력
    // JSX => javascript+XML
  render() {
    return (
        <div>{/*무조건 트리 형태여야하기 때문에 감싸는 div가 필요하다.*/}
          <div>{this.props.name}</div> {/*html 태그는 무조건 소문자*/}
          <h1>{this.props.age}</h1>
        </div>
    )
  }
}

export default App;
