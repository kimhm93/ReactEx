import React from "react";
import {FETCH_MOVIE,FETCH_DETAIL,FETCH_NEWS} from "./types";
import axios from 'axios';

// fetchMovie(1,1) fetMovie(1,2)
/*
                                                  reducer (state)
                                                   => setState() ==> render() 호출
    React (화면) =======>    액션 함수 호출   =====> 처리된 내용을 저장
                이벤트 발생(액션)
                = 메뉴
                = 버튼
                = 값 입력

    React ====> Reducer ====> React
          dispatch       state (구독) = ViewResolver 의 기능
    JSP   ====> Model(@Controller) ====> JSP
          dispatcherServlet   request ===> jsp
                              ======= ViewResolver(JSP에 Request를 전송)
                               model
 */
export const fetchMovie=(page,type)=>dispatch=>{
    axios.get('http://localhost:3355/movie_data',{
        params:{
            page:page,
            type:type
        }
    }).then(movies=>dispatch({
        type:FETCH_MOVIE,
        payload:movies.data
    }))
}
// [] [{}] => [0]
export const fetchDetail=(no)=>dispatch=>{
    axios.get('http://localhost:3355/movie_detail',{
        params:{
            no:no
        }
    }).then(movies=>dispatch({
        type:FETCH_DETAIL,
        payload:movies.data[0]
        // action
    }))
}
/*
    function fetchNews(fd) {
        dispatch(){

        }
    }
 */
export const fetchNews=()=>dispatch=>{
    axios.get('http://localhost:3355/movie_news').then(news=>dispatch({
        type:FETCH_DETAIL,
        payload:news.data
    }))
}