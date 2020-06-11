import React,{Component} from 'react'
import axios from 'axios'
//Scheduled
// SearchBar
class Scheduled extends Component{
    constructor(props) {
        super(props);
        this.state={
            movie_data:[],
            fd:''
        }
        // text에서 발생하는 event
        this.onTextChange=this.onTextChange.bind(this)
    }
    onTextChange(fd){
        // fd ==> SearchBar에서 입력된 값
        this.setState({fd});
        // render()로 이동 => 다시 DOM을 생성
    }
    componentDidMount() {
        var _this=this
        axios.get('http://localhost:3355/scheduled').then((response)=>{
            _this.setState({movie_data:response.data})
        })
    }
    /*
           const html=this.state.movie_data.map((m)=>
              <tr>
              </tr>
           )

           => function , return
           const html=this.state.movie_data.map((m)=>{
                return  (

                )
           })

     */
    render() {
        return (
            <React.Fragment>
                <div className={"row"} style={{"margin":"0px auto","width":"960px"}}>
                    <h1 className={"text-center"}>개봉예정 영화</h1>
                    {/* 상위 => 하위로 이벤트 전송 */}
                    <SearchBar fd={this.state.fd} onUserInput={this.onTextChange}/>
                    <div style={{"height":"30px"}}></div>
                    <MovieTable movie={this.state.movie_data} ss={this.state.fd}/>
                </div>

            </React.Fragment>
        )
    }
}
class MovieTable extends Component{
    render() {
        var row=[];
        this.props.movie.map((m)=>{
            if(m.title.indexOf(this.props.ss)==-1)
            {
                return;
            }
            row.push(<MovieRow movie={m}/>)
        })
        return (
            <table className={"table"}>
                <thead>
                <tr className={"danger"}>

                    <th className={"text-center"}></th>
                    <th className={"text-center"}>영화명</th>
                    <th className={"text-center"}>감독</th>
                    <th className={"text-center"}>출연</th>
                    <th className={"text-center"}>장르</th>

                </tr>
                </thead>
                <tbody>
                {row}
                </tbody>
            </table>
        );
    }
}
class MovieRow extends Component{
    render() {
        return (
            <tr>
                <td className={"text-center"}>
                    <img src={this.props.movie.poster} width={"35"} height={"35"}/>
                </td>
                <td>{this.props.movie.title}</td>
                <td>{this.props.movie.director}</td>
                <td>{this.props.movie.actor}</td>
                <td>{this.props.movie.genre}</td>
            </tr>
        )
    }
}
class SearchBar extends Component{
    constructor(props) {
        super(props);
        // 이벤트
        this.handlerChange = this.handlerChange.bind(this);
    }

    handlerChange(e) {
        // props <SearchBar onUserInput={상위 이벤트 호출}>
        this.props.onUserInput(e.target.value);
    }

    render() {
        return (
            <form>
                <input type={"text"} className={"input-sm"} placeholder={"검색어 입력"}
                 size={"30"} onChange={this.handlerChange}
                />
            </form>
        )
    }

}
export default Scheduled