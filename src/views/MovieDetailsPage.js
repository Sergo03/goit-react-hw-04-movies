import React, { Component,Suspense,lazy } from 'react';
import Axios from 'axios';
import { NavLink,Route } from 'react-router-dom';
const Cast = lazy(() => import('../components/Cast/Cast' /* webpackChunkName: "Cast-page" */))
const Reviews = lazy(() => import('../components/Reviews/Reviews' /* webpackChunkName: "Reviews-page" */))

class MovieDetailsPage extends Component{
    state = {
        backdrop_path:null,
        title: null,
        vote_average: null,
        overview: null,
        genres: [], 
       
    }
     async componentDidMount() {
       const {movieId} = this.props.match.params
       const response = await Axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=a11681fbc130343b10afc879742afe20`)
      
     this.setState({ ...response.data })
          
    }

     
    hanldeBack = () => {
        const { history } = this.props
        history.goBack();
    }

    render() {
        
        const { backdrop_path, title, vote_average, overview, genres } = this.state;
        const { match } = this.props;
        return (
            <>
                <button type='button' onClick={this.hanldeBack}>Go back</button>
                {backdrop_path && <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${backdrop_path}`} alt={title} />}
                <h1>{title}</h1>
                <p>Vote average: {vote_average && vote_average * 10 + '%'}</p>
                <p>Overview {overview}</p>
                <ul> Genres {genres.map(genre => <li key={genre.id}>{genre.name}</li>)}</ul>
                
                <ul>
                    <li>
                        <NavLink
                            to={`${match.url}/cast`}
                            className="NavLink"
                            activeClassName="NavLink--active"
                        >Cast
                        </NavLink></li>
                    <li>
                        <NavLink
                            exact
                            to={`${match.url}/reviews`}
                            className="NavLink"
                            activeClassName="NavLink--active"
                        >Reviews
                        </NavLink></li>
                </ul>
                
                <Suspense fallback={<h1>Loading...</h1>}>
                    <Route path={`${match.path}/cast`} component={Cast} />
                    <Route path={`${match.path}/reviews`} component={Reviews} />
                </Suspense>
               
            </>
        )
    }
}

export default MovieDetailsPage;


