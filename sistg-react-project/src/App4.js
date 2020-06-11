import React,{Component} from "react";
import axios from 'axios'
/*
    String s
    var s=""
    int a;
    var a=1;
    double d;
    var d=0.0;
    boolean d;
    var d=false;

    String[] ss;
    var ss=[];

    MovieVO vo
    var vo={};

    ==> javascript 배열
        ["aaa",10,{name:"",sex:""}]

        Object[] obj={"ff",2,2.0} Java에서 모든 데이터를 받는 배열


 */
class App4 extends Component{
    // <App4 movie={movie}/>  => 자동으로 props에 값을 채워준다
    // 이벤트 등록, state 변수를 설정
    constructor(props) {
        super(props);
        this.state={
            detail:{},
            show:false,
            movie:[]
        }

    }
    // 이벤트(클릭)
    componentWillMount() {
        // 필요한 데이터를 읽어 온다 => state
        axios.get('http://localhost:3000/weekly.json').then((result)=>
            this.setState({movie:result.data})
        )
    }

    onMovieChange(m)
    {
        this.setState({detail:m,show:true})
        // render()를 호출 => 새로운 데이터를 호출
    }


    // 화면 출력
    render() {
        // HTML
        const html=this.state.movie.map((m,key)=>
                <div className="col-md-4" onClick={this.onMovieChange.bind(this,m)}>
                    <div className="thumbnail">
                          <img src={m.poster} alt="Lights" style={{"width":"100%"}}/>
                          <div className="caption">
                             <p>{m.title}</p>
                          </div>
                    </div>
                </div>
        )
        return(
            <div className={"row"}>
                <div className={"col-sm-8"}>
                    {html}
                </div>
                <div className={"col-sm-4"}>
                    {this.state.show===true?<MovieDetail movie={this.state.detail}/>:null}
                </div>
            </div>
        )
    }
}

class MovieDetail extends Component{
    render() {
        return(
            <table className={"table"}>
                <tr>
                    <td rowSpan={"5"} width={"30%"} className={"text-center"}>
                        <img src={this.props.movie.poster} width={"100%"}/>
                    </td>
                    <td width={"70%"}>
                        <b>{this.props.movie.title}</b>
                    </td>
                </tr>
                <tr>
                    <td>감독:{this.props.movie.director}</td>
                </tr>
                <tr>
                    <td>출연:{this.props.movie.actor}</td>
                </tr>
                <tr>
                    <td>평점:{this.props.movie.score}</td>
                </tr>
                <tr>
                    <td>장르:{this.props.movie.genre}</td>
                </tr>
                <tr>
                    <td colSpan={"2"}>
                        {this.props.movie.story}
                    </td>
                </tr>
            </table>
        )
    }

}

export default App4;