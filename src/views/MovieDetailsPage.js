import React, { Component } from 'react';
import Axios from 'axios';
import { NavLink, Route,Switch } from 'react-router-dom';
import Cast from '../components/Cast';
import Reviews from '../components/Reviews';


class MovieDetailsPage extends Component{
    state = {
     
    }


    render() {
        return (
            <>
                <ul>
                    <li><NavLink
                        exact
                        to="/movies/:movieId/cast"
                        className="NavLink"
                        activeClassName="NavLink--active"
                    >Cast</NavLink></li>
                    <li><NavLink
                        exact
                        to="/movies/:movieId/reviews"
                        className="NavLink"
                        activeClassName="NavLink--active"
                    >Reviews</NavLink></li>
                </ul>

                <Switch>
                    <Route exact path="/movies/:movieId/cast" component={Cast} />
                    <Route exact path="/movies/:movieId/reviews" component={Reviews} />
                </Switch>
            </>
        )
    }
    


}

export default MovieDetailsPage;


// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US