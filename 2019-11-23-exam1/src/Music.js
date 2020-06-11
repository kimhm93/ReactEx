import React from "react";
/*
    JSX => javascript+XML(화면 출력)
    문법
    1. 저장 => 트리형태 => 반드시 전체를 감싸는 태그가 필요하다 (최상위 태그)
        <div>aaa</div>
        <div>bbb</div> ==> 오류

        <div>
            <div>aaa</div>
            <div>bbb</div>
        </div>

    2. 여는 태그 / 닫는 태그가 동일
        <a><b>aaa</a></b> => 오류
        <a><b>aaa</b></a> => 정상

    3. EMPTY 태그 => <br>(X) <br/>(O)

    4. 속성 처리 ==> <img width=100>(X) <img width="100">(O)

    5. 변수 출력 => {변수명}

        var name = "홍길동"
        <div>{name}</div>
        <div style="{name}">(X) <div style={"name"}>(X) <div style={name}>(O)

        *** CSS
        <div style={{"font-size":"1px"}}></div>(X) <div style={{"fontSize":"1px"}}></div>(O) <div style={{"color":"red","margin":"0px auto"}}></div>

        외부 CSS
        <div class=""></div> => 적용(X)
        <div className=""></div> => 적용(O)

        <html>
            <body>
                <div>Hello</div>
            </body>
        </html>
        
        function Music(props)

        JSX, 가상돔 =>

        <Music movie={movie}>
        ======================props ==> this.props.movie
        map(function(data,index) {
            return <><>
        });

        for(var i=0; i <10; i++)
        for(data:movie)
 */
class Music extends React.Component{
    render() {
        const html = this.props.movie.map(m =>
            <div className="col-md-4 col-sm-6">
                <div className="thumbnail">
                    <img src={m.poster} alt="Lights" style={{"width":"100%"}}/>
                    <div className="caption">
                        <p>{m.no}</p>
                    </div>
                </div>
            </div>
        );
        return (
            <React.Fragment>
                {html}
            </React.Fragment>
        )
    }
}

export default Music;