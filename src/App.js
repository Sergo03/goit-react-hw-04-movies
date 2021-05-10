import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import HomePage from './views/HomePage'
import MoviesPage from './views/MoviesPage'
import MovieDetailsPage from './views/MovieDetailsPage'


const App=()=> {
  return (
    < >
      <ul>
        <li>
          <NavLink
            exact
            to="/"
            className="NavLink"
            activeClassName="NavLink--active"
          >Home</NavLink>
        </li>
        <li><NavLink
          to="/movies"
          className="NavLink"
          activeClassName="NavLink--active"
        >Movies</NavLink>
        </li>
      </ul>

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/movies/:movieId" component={MovieDetailsPage} />
        <Route exact path="/movies" component={MoviesPage} />
        {/* <Route exact path="/movies/:movieId/cast" component={Cast} />
        <Route exact path="/movies/:movieId/reviews" component={Reviews} /> */}
        {/* <Route component={HomePage} /> */}
      </Switch>
       
    </>
  )
}

export default App;

// https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>
// a11681fbc130343b10afc879742afe20