import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home, Posts, About, Login, MyPage, Search, NotFound } from './index2';
// import Home from './routes/Home';
// import Post from './routes/Post';
import Header from './Header';
/*
 <li><NavLink to="/movie/list">영화목록</NavLink></li>
                           <li><NavLink to="/movie/real">상영영화</NavLink></li>
                           <li><NavLink to="/movie/find">영화검색</NavLink>
                           </li>
                           <li><NavLink to="/movie/news">영화뉴스</NavLink></li>
                           <li><NavLink to="/movie/recommend">추천영화</NavLink></li>
 */
//const App = () => {
class App extends  Component{
    render() {
        return (<Router>
                <div>
                    <Header/>
                    <div className="container">
                        <div className="jumbotron">
                            <div className="container">
                                <Switch>
                                    <Route exact path="/" component={Home}/>
                                    <Route path="/movie/list" component={About}/>
                                    <Route path="/movie/real" component={Posts}/>
                                    <Route path="/movie/find" component={MyPage}/>
                                    <Route path="/movie/news" component={Login}/>
                                    <Route path="/movie/recommend" component={Search}/>
                                    <Route path="/render" render={() => (
                                        <h3>Render Test</h3>
                                    )}/>
                                    <Route component={NotFound}/>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
};

export default App;
