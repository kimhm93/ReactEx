import React,{useState,useEffect} from "react"; // useState == constructor userEffect == componentWillMount 이것들을 Hooks라고 한다
import axios from "axios";
// <App5 movie={}/>
// render()
// 16.08 버전부터 function으로 만드는 방식 생김 (자바스크립트에서는 class방식 보다 function이 사용 되기 때문에 만들짐)
/*const H=()=>{
    const color=['red','pink','green','blue','yellow'];
    const no=parseInt(Math.random()*5);
    return(
        <h1 className={"text-center"} style={{"color":color[no]}}>주간 박스오피스</h1>
    )
}*/
//자바 => 싱글턴 = memo
const H1=React.memo(()=>{
    const color=['red','pink','green','blue','yellow'];
    const no=parseInt(Math.random()*5);

        return(
            <h1 className={"text-center"} style={{"color":color[no]}}>주간 박스오피스</h1>
        )
    })
function App5(props) {
    /*var movie=[];
    axios.get('http://localhost:3000/weekly.json').then((result)=>{
        movie=[...result.data];
        console.log(movie);
    })*/
    //function에서 state를 사용 할 수 있게 제작 ==> useXxx => Hooks
    // useState => [변수명,setter]
    const [movie,setMovie]=useState([]);
    const [detail,setDetail]=useState({});
    const [show,setShow]=useState(false);
    // componentWillMount , componentDidMount => 변경한 Hooks
    useEffect(()=>{
        axios.get('http://localhost:3000/weekly.json').then((result)=>{
            setMovie(result.data);
        })
    })
    const onMovieChange=(m)=>{
        setDetail(m);
        setShow(true);
        //this.setState({detail:m,show:true})
    }
    const html=movie.map((m,key)=>
        <div className="col-md-4" onClick={()=>onMovieChange(m)}>
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
            <H1/>
            <div className={"col-sm-8"}>
                {html}
            </div>
            <div className={"col-sm-4"}>
                {show===true?<MovieDetail movie={detail}/>:null}
            </div>
        </div>
    )
    function MovieDetail(props){
        return(
            <table className={"table"}>
                <tr>
                    <td rowSpan={"5"} width={"30%"} className={"text-center"}>
                        <img src={props.movie.poster} width={"100%"}/>
                    </td>
                    <td width={"70%"}>
                        <b>{props.movie.title}</b>
                    </td>
                </tr>
                <tr>
                    <td>감독:{props.movie.director}</td>
                </tr>
                <tr>
                    <td>출연:{props.movie.actor}</td>
                </tr>
                <tr>
                    <td>평점:{props.movie.score}</td>
                </tr>
                <tr>
                    <td>장르:{props.movie.genre}</td>
                </tr>
                <tr>
                    <td colSpan={"2"}>
                        {props.movie.story}
                    </td>
                </tr>
            </table>
        )
    }
}
export default App5;