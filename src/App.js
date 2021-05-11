import React,{Suspense,lazy} from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
const HomePage = lazy(() => import('./views/HomePage' /* webpackChunkName: "home-page" */))
const MoviesPage = lazy(() => import('./views/MoviesPage' /* webpackChunkName: "Movies-page" */))
const MovieDetailsPage = lazy(() => import('./views/MovieDetailsPage' /* webpackChunkName: "MovieDetails-page" */))

const App=()=> {
  return (
    < >
      <ul className='main-link'>
        <li className='main-link-item'>
          <NavLink
            exact
            to="/"
            className="NavLink"
            activeClassName="NavLink--active"
          >Home</NavLink>
        </li>
        <li className='main-link-item'><NavLink
          to="/movies"
          className="NavLink"
          activeClassName="NavLink--active"
        >Movies</NavLink>
        </li>
      </ul>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/movies/:movieId" component={MovieDetailsPage} />
          <Route exact path="/movies" component={MoviesPage} />
          <Route component={HomePage} />
        </Switch>
      </Suspense>
    </>
  )
}

export default App;


