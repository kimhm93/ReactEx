import React,{Component,Fragment} from "react";
// 생명주기
// props => name={"홍길동"} sex{"남자"} age={"30"}
// props => 불변
// state =>
// state
/*
    this.state={
        page:1,
        data:[],
        detail
      }

      constructor => componentWillMount => render => componentDidMount
                => 이벤트 발생 (페이지 클릭) => setState() => render() (Ajax)
                                            ===========
                                            데이터 변경시 화면에 출력
                                              => re-rendering()
 */

export default class  App3 extends Component{
    constructor(props) {
        super(props);
        console.log("constructor(props) Call...")//System.out.println()
        /*
            생성자 함수 App3(){}
            없는 경우에는 => 자동 생성
            = (멤버) 변수 선언
            this.state
            이벤트 등록
         */
        this.state={
            name:''
        }
        this.nameChange=this.nameChange.bind(this);
    }
    nameChange(e)
    {
        console.log("nameChange Call...")
        //this.state.name=e.target.value;
        this.setState({name:e.target.value}) // render()를 다시 호출 하기 때문에 화면이 다시 출력
    }

    componentWillMount() {

        // Mount가 되기 전에 수행하는 함수
        // Mount => 메모리에 올리는 것
        // 외부 서버에서 데이터 읽어 온다
        console.log("componentWillMount() Call...")
    }
    // window.onload ==> $(function(){})
    // 다른 프레임워크와 연결 (Jquery, AngularJS ...)
    componentDidMount() {
        console.log("componentDidMount() Call...")
    }
    // 읽은 데이터를 화면에 출력
    /*
        화면에 출력 => HTML 이용한다
        HTML => JSX(JavaScript + XML)을 주로 이용한다.
        ML => 태그형식 <태그명 속성="">
              =======
              1) 여는 태그 <table>
              2) 닫는 태그 </table>
              3) 단독 태그 <br/> <input/> <img/> ...

          * React 문법
          1. JSX
             = 반드시 전체를 포함하는 태그를 필요로 한다.(최상위 태그)
                예)
                   <div>aaa</div>
                   <div>bbb</div> ==> Error

                   <div>
                     <div>aaa</div>
                     <div>bbb</div>
                   </div>
          2. HTML 태그는 반드시 소문자
             <div> <Div>(X) <DIV>(X) ==> 사용자 태그로 인식
          3. 속성 값을 입력 할때는 반드시 ""
               <input type={"text"}/>
          4. 속성 중에 class => className
             style은 {{"":"",...}} => style={{"width":"200px","height":"150px"}}
             style={{"font-size":"10px"}} (X)
             style={{"fontSize":"10px"}} (O)
             
          6. 여는 태그와 닫는 태그가 일치
             <a><b><c></b></c></a> (X)
             <a><b><c></c></b></a> (O) 포함 관계가 명확해야된다

          7. rowspan => rowSpan, colspan => colSpan

          8. 이벤트 처리
                X          O
             onclick => onClick
             onchange => onChange
             onkey => onKey
             onmouseover => onMouseOver
             
           render(){
                return(
                    {/별 주석 별/}
                )
           }

     */
    render() {
        console.log("render() Call...")
        return(
            /*<div>
                이름:<input type={"text"} className={"input-sm"} size={"20"}
                    onChange={this.nameChange}
                />
                <h1>{this.state.name} </h1>

            </div>*/

            <div className="col-md-4">
                <div className="thumbnail">
                    <a href="/w3images/lights.jpg">
                        <img src="/w3images/lights.jpg" alt="Lights" style={{"width":"100%"}}/>
                            <div className="caption">
                                <p>Lorem ipsum...</p>
                            </div>
                    </a>
                </div>
            </div>
        )
    }
}