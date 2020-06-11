import React from 'react';
import MovieReal2 from './components/MovieReal2'
import store from './store/store'
import {Provider} from "react-redux";  // 하위 태그에 받은 변수를 보내는 것 (전역변수)
import {Route,Switch} from "react-router";
import {BrowserRouter as Router} from "react-router-dom";
import MovieDetail2 from "./components/MovieDetail2";
import MovieReal from "./components/MovieReal";
import MovieNews from "./components/MovieNews";

function App() {
  return (
      <Router>
        <Provider store={store}>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"/>
            <div className={"container"}>
                <Switch>
                    <Route exact path={"/"} component={MovieReal2}/>
                    <Route path={"/movie_detail/:no"} component={MovieDetail2}/>
                    <Route path={"/movie_news"} component={MovieNews}/>
                </Switch>
            </div>
        </Provider>
      </Router>
  );
}

export default App;
