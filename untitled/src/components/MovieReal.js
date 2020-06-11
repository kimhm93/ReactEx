import React,{Fragment,useEffect} from "react";
import {fetchMovie} from "../actions/movieActions";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";

function MovieReal(props) {
    useEffect(()=>{
        props.fetchMovie(1,1);
    },[])
    const html=props.movies.map((m)=>
        <div className="col-md-4">
            <div className="thumbnail">
                <NavLink to={"/movie_detail/"+m.no}>
                    <img src={m.poster} alt="Lights" style={{"width":"100%"}}/>
                </NavLink>
                <div className="caption">
                    <p>{m.title}</p>
                </div>
            </div>
        </div>
    )
    return(
        <div className={"row"}>
            <h1 className={"text-center"}>현재 상영 영화</h1>
            {html}
        </div>
    )
}
const mapStateToProps=state=>({
    movies: state.movies.movie
})

//<MovieDetail detail=s{state.movies.detail)/>

export default connect(mapStateToProps,{fetchMovie})(MovieReal)

