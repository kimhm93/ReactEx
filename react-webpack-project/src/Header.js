import React,{Component} from 'react';
import { NavLink } from 'react-router-dom';

//const Header = () => {
class Header extends Component
{
   render() {
       return (
           /*<div className="header">
               <NavLink exact className="item" activeClassName="active" to="/">홈</NavLink>
               <NavLink className="item" activeClassName="active" to="/about/qvil">소개</NavLink>
               <NavLink className="item" activeClassName="active" to="/posts">포스트</NavLink>
               <NavLink className="item" activeClassName="active" to="/mypage">마이페이지</NavLink>
               <NavLink className="item" activeClassName="active" to="/login">로그인</NavLink>
               <NavLink className="item" activeClassName="active" to="/search">검색</NavLink>
           </div>*/
           <nav className="navbar navbar-inverse navbar-fixed-top">
               <div className="container">
                   <div className="navbar-header">
                       <button type="button" className="navbar-toggle" data-toggle="collapse"
                               data-target=".navbar-collapse">
                           <span className="icon-bar"></span>
                           <span className="icon-bar"></span>
                           <span className="icon-bar"></span>
                       </button>
                       <NavLink exact className="navbar-brand" to="/">강북쌍용교육센터</NavLink>
                   </div>
                   <div className="navbar-collapse collapse">
                       <ul className="nav navbar-nav">
                           <li><NavLink to="/movie/list">영화목록</NavLink></li>
                           <li><NavLink to="/movie/real">상영영화</NavLink></li>
                           <li><NavLink to="/movie/find">영화검색</NavLink>
                           </li>
                           <li><NavLink to="/movie/news">영화뉴스</NavLink></li>
                           <li><NavLink to="/movie/recommend">추천영화</NavLink></li>

                       </ul>
                      {/* <ul className="nav navbar-nav navbar-right">
                           <li><a href="#" data-toggle="modal" data-target="#intro">로그인</a></li>
                       </ul>*/}
                   </div>
               </div>
           </nav>
       );
   }
}

export default Header;