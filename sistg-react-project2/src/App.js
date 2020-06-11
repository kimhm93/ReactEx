import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Chef from './components/Chef'
import Recipe from './components/Recipe'
import RecipeNews from './components/RecipeNews'
import RecipeRecommend from './components/RecipeRecommend'

import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import RecipeDetail from "./components/RecipeDetail";


function App() {
  return (
    <Router>
      <Header/>
      <div className={"container-fluid"}>
          <div className={"jumbotron"}>
            <Switch>
              <Route exact path={"/"} component={Home}/>
              <Route path={"/recipe"} component={Recipe}/>
              <Route path={"/chef"} component={Chef}/>
              <Route path={"/recommend"} component={RecipeRecommend}/>
              <Route path={"/news"} component={RecipeNews}/>
              <Route path={"/detail/:no"} component={RecipeDetail}/> /
            </Switch>
          </div>
      </div>
    </Router>

  );
}

export default App;
