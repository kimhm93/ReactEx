import React,{Component} from "react"
import axios from "axios"

class MyPage extends Component{
    constructor (props) {
        console.log("aaa");
        super(props)
        this.state = {
            items: [],
            ss:''
        }
        this.handleUserInput=this.handleUserInput.bind(this);
    }
    handleUserInput(ss)
    {
        this.setState({ss:ss});
    }
    componentWillMount () {
        console.log("bbb");

        var _this = this;
        axios.get('/scheduled').then(res => {
            _this.setState({items: res.data});
            console.log(this.state.items);
        });
    }
    render()
    {
        console.log("ccc");


        return (

                <div>
                    <SearchBar ss={this.state.ss}
                               onUserInput={this.handleUserInput}/>
                    <MusicTable music={this.state.items} ss={this.state.ss}/>
                </div>

        );
    }
}
class MusicTable extends React.Component{
    render()
    {
        var rows=[];
        /*
                String[] music={}
                for(String s:music)
                [{},{},{}]
         */
        /*this.state.items.map(e => (
           {/!* <tr>
                <td>{e.mno}</td>
                <td><img src={e.poster} width="30" height="30"/></td>
                <td>{e.director}</td>
                <td>{e.genre}</td>
            </tr>*!/}

        ));*/
        this.props.music.forEach((music) => {
            if(music.title.indexOf(this.props.ss)==-1)
            {
                return;
            }
            // rows = 50
            rows.push(<MusicRow music={music} key={music.title}/>);
            /*
                  react => 모든 메소드에 javascript지원하는 모든 것을 사용이 가능
             */
        });
        // XML
        return(

            <table className="table table-hover">
                <thead>
                <th>순위</th>
                <th></th>
                <th>제목</th>
                <th>감독</th>
                </thead>
                <tbody>
                {rows}
                </tbody>
            </table>

        )
    }
}
class MusicRow extends React.Component{
    render()
    {
        return(
            <tr>
                <td>{this.props.music.rank}</td>
                <td><img src={this.props.music.poster} width="30" height="30"/></td>
                <td>{this.props.music.title}</td>
                <td>{this.props.music.director}</td>
            </tr>
        );
    }
}
class SearchBar extends React.Component{
    constructor(props) // 생성자
    {
        super(props);
        // 이벤트 등록
        this.handleChange=this.handleChange.bind(this);
        // handleClick
    }
    handleChange()
    {
        this.props.onUserInput(this.filterText.value);
    }
    render()
    {
        return (
            <form>
                <input className="form-control"
                       placeholder="Search" value={this.props.ss}
                       ref={(input)=>this.filterText=input}
                       onChange={this.handleChange}
                />
            </form>
        );
    }
}
export default MyPage;