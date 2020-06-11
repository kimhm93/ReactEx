import React, {useReducer} from "react";
// state 관리, 이벤트 관리
/*
    1) Component에서 => 이벤트 발생 ===> reducer로 전송
                        별칭 => action => type
                        버튼 :  로그인 : LOGIN
                                취소 : LOGIN_CANCLE
                                회원가입 : JOIN
                                취소 : JOIN_CANCEL ==> 내부 프로토콜
        reducer ==> 요청내용을 처리 (state를 변경) ==> 컴포넌트가 읽어서 처리
 */
const reducer = (state, action) => {
    console.log(action.name);
    console.log(action.value);
    return {
        ...state,
        [action.name]:action.value
    }
}

const Info = () => {
    // reducer 연결 => 호출
    const [state, dispatch] = useReducer(reducer,{name:'',addr:''});
    const {name, addr} = state;
    const onChange = (e) => {
        dispatch(e.target);
    }
    return (
        <div>
            <div>
                <input type={"text"} name={"name"} value={name} onChange={onChange}/>
            </div>
            <div>
                <input type={"text"} name={"addr"} value={addr} onChange={onChange}/>
            </div>
            <div>
                <b>이름:{name}</b>
            </div>
            <div>
                <b>주소:{addr}</b>
            </div>
        </div>
    )
}

export default Info;