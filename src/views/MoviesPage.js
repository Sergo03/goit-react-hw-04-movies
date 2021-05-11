import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';


class MoviesPage extends Component{
    state = {
        query:'',
        movies:[],
    }
 handleChange = e => {
     this.setState({ query: e.currentTarget.value })
     
    }
  
   componentDidMount() {
    const { location } = this.props;
      
    const getMovies = new URLSearchParams(location.search).get('query');
    
    if (!getMovies) {
      return;
       }
    this.onSubmit(getMovies);
    }
    
    handleSubmit = e => {
        e.preventDefault();
        const { query } = this.state;
        this.onSubmit(query)
    }


    fetchMovie = async (query) => {
        const response = await Axios.get(`https://api.themoviedb.org/3/search/movie?api_key=a11681fbc130343b10afc879742afe20&query=${query}&page=1`)
        this.setState({ movies: response.data.results })
        this.setState({ query: '' })
    }

    onSubmit = (query) => {
        
        this.setState({ query });
        this.fetchMovie(query);

        this.props.history.push({
            pathname: this.props.location.pathname,
            search: `query=${query}`,
        })
    }


    render() {
        const { movies}=this.state
        
        return (
            <>
                <form className='SearchForm' onSubmit={this.handleSubmit}>
                    <button type="submit" className='SearchForm-button'>
                        <span className='SearchForm-button-label'>Search</span>
                    </button>

                    <input
                        className='SearchForm-input'
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search movie"
                        value={this.state.query}
                        onChange={this.handleChange}
                    />
                </form>
                <ul>
                    {movies.map(({ title, id }) => {
                        return <li key={id}>
                            <Link  to={`/movies/${id}`}>{title}</Link></li>
                    })}
                </ul>
            </>
        )
    }
}


export default MoviesPage;