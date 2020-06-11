import React, {useEffect, useState} from "react";
import axios from 'axios';
/*
    const [data, setData] = useState(0) // 숫자
        data = 0
    const [data, setData] = useState('') // 문자
        data = ''
        클래스형
        this.state= {
            data:''
        }
    const [data, setData] = useState({movie:[]}) // 객체
        data = {movie:[]}
    const [data, setData] = useState([]) // 배열
        data = []
    const [data, setData] = useState({})
        data = {}

    <App name="홍길동"/>
    class App extends Component {
        constructor(props) { ===> this.props.name
            super(props);
        }
    }

    <App name="심청이"/>
    function App(name) {
    }
 */
const App2 = () => {
    // state선언
    const [data, setData] = useState({movie:[]});
    // 외부데이터를 읽어서 처리 : componentWillMount, componentDidMount...
    useEffect(()=>{
        const movieData = async() => {
            const result = await axios.get('http://localhost:3000/movie.json');
            console.log(result.data);
            setData(result.data);
        }
        movieData();
    },[]);
    return (
        <ul>
            {data.movie.map((m) =>
                <li key={m.mno}><img src={m.poster}/></li>
            )}
        </ul>
    )
}

export default App2;