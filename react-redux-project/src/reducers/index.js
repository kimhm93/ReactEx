import {WEEK,MONTH,YEAR} from "../actions";

import {combineReducers} from "redux";
/*
    기능 => 액션
    ====
        게시판
        회원가입
        공지사항
 */
// state, action => action을 받아서 => state를 변경
// state를 설정
/*
    class형
    class A extends Component{
        constructor() {
            this.state={
                movie:[],
                fd:''
            }
        }
    }
    function형
    function A() {
        const [data,setData] = useState(0)
    }
 */
const initialState = {
    movie:[
        {
            "title" : "겨울왕국 2 (2019)",
            "poster" : "//img1.daumcdn.net/thumb/C155x225/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F5afd212b68e34e61a964d969dd898e2f1574298873981",
            "actor" : "제니퍼 리"
        },
        {
            "title" : "나를 찾아줘 (2019)",
            "poster" : "//img1.daumcdn.net/thumb/C155x225/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fd578c5d478bf43b09bfb7e9f8cd72bf01573095574793",
            "actor" : "이영애"
        },
        {
            "title" : "블랙머니 (2019)",
            "poster" : "//img1.daumcdn.net/thumb/C155x225/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Ffbe0d4ccc4804448a8aacb9e98ccccfe1573614596648",
            "actor" : "조진웅",
            "director" : "정지영"
        }
    ]
}
/*
    App {
        <Menu store={store}/>
        <MovieView/>
    }
    onClick() {
        dispatch(this.props.store.week())
    }
    버튼 ==> <button onClick={this.onClick}>
 */
// 액션 ==> 처리
const movieApp = (state=initialState,action) => {
    switch (action.type) {
        case "WEEK":
            return {
                movie:[
                    {
                        "title" : "겨울왕국 2 (2019)",
                        "poster" : "//img1.daumcdn.net/thumb/C155x225/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F5afd212b68e34e61a964d969dd898e2f1574298873981",
                        "actor" : "제니퍼 리"
                    },
                    {
                        "title" : "나를 찾아줘 (2019)",
                        "poster" : "//img1.daumcdn.net/thumb/C155x225/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fd578c5d478bf43b09bfb7e9f8cd72bf01573095574793",
                        "actor" : "이영애"
                    },
                    {
                        "title" : "블랙머니 (2019)",
                        "poster" : "//img1.daumcdn.net/thumb/C155x225/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Ffbe0d4ccc4804448a8aacb9e98ccccfe1573614596648",
                        "actor" : "조진웅",
                        "director" : "정지영"
                    }
                ]
            }
        case "MONTH":
            return {
                movie:[
                    {
                        "title" : "10년 (2018)",
                        "poster" : "//img1.daumcdn.net/thumb/C155x225/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F7d61e0df98b744368f9a8b5cf6510b0e1574213286062",
                        "actor" : "키노시타 유스케"
                    },
                    {
                        "title" : "21 브릿지 (2019)",
                        "poster" : "//img1.daumcdn.net/thumb/C155x225/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fd16d5559006149c48b5fa4547af7cea21574411256241",
                        "actor" : "채드윅 보스만"
                    },
                    {
                        "title" : "6 언더그라운드 (2019)",
                        "poster" : "//img1.daumcdn.net/thumb/C155x225/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fbac930156e174803aaba1dfadc43cca41574222098501",
                        "actor" : "라이언 레이놀즈"
                    }
                ]
            }
        case "YEAR":
            return {
                movie:[
                    {
                        "title" : "소림사: 무림퇴마전 (2019)",
                        "poster" : "//img1.daumcdn.net/thumb/C155x225/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fd6ffc7a23cd1456a85b75bb2a40af6591573615997902",
                        "actor" : "전소호"
                    },
                    {
                        "title" : "소림쿵푸: 마지막 대결 (2018)",
                        "poster" : "//img1.daumcdn.net/thumb/C155x225/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F13586db40deb40bdb107fa6ea8484e681574398207892",
                        "actor" : "양가인"
                    },
                    {
                        "title" : "속물들 (2019)",
                        "poster" : "//img1.daumcdn.net/thumb/C155x225/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F45a7c107eabd49b1a3ec18a63bcbc2991573780166473",
                        "actor" : "이상철"
                    }
                ]
            }
        default:
            return state
    }
}

const movieApp2 = combineReducers({
    movieApp
})

export default movieApp2