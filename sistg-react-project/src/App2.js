import React,{Component,Fragment} from "react";
// ${"Hello"} {} => 변수 출력
/*
    div.container div div.row
    <React.Fragment> 가상 태그 => div.container (div) div.row 인식못함

    React => 화면 UI (HTML) => render()
             ============== JSX(JavaScript + XML) => ES6
             화면 => class 기반 , function 기반 : Hooks

    React
        JSX, 가상돔
        class , function
        Hooks
        Redux
        Mobx, Saga

        React Redux Mobx(Saga)
        ===== ===== ==========
         JSP   MVC    Spring

         XML 문법
            = 클래스명 , 함수명 ==> class App function App2 => App2()
                                 =========  =============
                                 <App />      <App2 />
                      1. HTML 태그와 사용자 정의 태그
                         ========   =============
                         반드시 소문자  첫자만 대문자

            =
                <ul>
                    <li>Java1</li>
                    <li>Java2</li>
                    <li>Java3</li>
                </ul>

                ==> render()
                    {
                        return(
                            <ul>
                                <li>Java1</li>
                                <li>Java2</li>
                                <li>Java3</li>
                            </ul>
                        )
                    }
                    ReactDOM.render()
                        => XML형태 => HTML로 전환
                            React.createElement('ul',null,
                                React.createElement('li',null,'Java1'),
                                React.createElement('li',null,'Java2'),
                                React.createElement('li',null,'Java3'),
                            )
                            ==> 가상 메모리에 올라간다


 */
class App2 extends Component{
    // React 시작점
    render() {
        // => 삼항연산자 , map
        return(
            /*<ul>
                <li>Java1</li>
                <li>Java2</li>
                <li>Java3</li>
            </ul>*/
            React.createElement('ul',null,
                React.createElement('li',null,'Java1'),
                React.createElement('li',null,'Java2'),
                React.createElement('li',null,'Java3'),
            )
            /*<Fragment>
                {/!*Fragment는 임시 루트를 만드는 태그명*!/}
                <div className={"row"}>
                    <h1 className={"text-center"}>React 연습</h1>
                </div>
                <div className={"row"}>
                    <h1 className={"text-center"}>React 연습</h1>
                </div>
            </Fragment>*/
        )
    }
}
export  default  App2;