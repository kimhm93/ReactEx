/*
    1. store
       state를 관리
       => class A {
            constructor(props) {
                this.state= {
                    movie_data:[],
                    movie_detail:{}
                }
            }
          }
       => store를 만드는 형식
       const initState={
        movie:[],
        movie_detail:{}
       }
       => 전송 방식
          컴포넌트 (class, function=>react) => 스토어에 있는 state를 변경하기 위해서
          신호(Action:이벤트) 전송 ===> reducer (이벤트에 대한 처리) ==> state(newState로 변경)
                dispatch(week())
          => 컴포넌트는 subscribe => 갱신된 state 읽어와서 => render()에서 출력
    2. action
        스토어에 있는 state를 변경하기 위한 어떤 신호 전송
                                          ============== 이벤트
        형식)
            export const INCREMENT = "INCREMENT";
            export const DECREMENT = "DECREMENT"l
            ==> dispatch(increment('red')); => 값을 전송 (매개변수)
            export function increment(color) {
                return {
                    type: INCREMENT,
                    color: color
                }
            }
    3. reducer : Action을 받아서 처리 (state=>newState=>store에 저장)
        const initState={
            movie:[],
            movie_detail:{}
        }
        // componentDidMount(), shoouldComponentUpdate()
        function reducer(state=initState,action) {
            switch(action.type) {
                case INCREMENT:
                    return {
                        ...state
                    }
            }
        }
    4. 액션 생성자
    5. Provider : 각 컴포넌트에 store를 전송하는 역할
        <Provider store={store}>
            <App/>
            <Menu/>
        </Provider>

        ==> this.props.store.getState().movie_detail
        ==> this.props.store.getState().movie.map((m)=>)
    6. connect => react-redux
       mapStateToProps => state를 가져오기
       mapDispatchToProps => 전송하기
 */
export const INCREMENT='INCREMENT'
export const DECREMENT='DECREMENT'
export const SET_DIFF='SET_DIFF'

// 함수 제작
// dispatch(this.store.increment()) => react
// reducer => 처리 => state를 갱신
export function increment(){
    return {
        type:INCREMENT
    }
}
// dispatch(this.store.decrement()) => react
export function decrement() {
    return {
        type:DECREMENT
    }
}

// dispatch(this.store.setDiff(3)) => react
export function setDiff(value) {
    return {
        type:SET_DIFF,
        diff:value
    }
}