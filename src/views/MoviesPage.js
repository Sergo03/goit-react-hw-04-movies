import React, { Component } from 'react';
import Axios from 'axios';
import { Link,Route } from 'react-router-dom';

class MoviesPage extends Component{
    state = {
        query:'',
        movies:[],
    }
 handleChange = e => {
     this.setState({ query: e.currentTarget.value })
     
    }

    
    async componentDidMount() {
    //     const { query } = this.state
    //     console.log(query);
    //    const response = await Axios.get(`https://api.themoviedb.org/3/search/movie?api_key=a11681fbc130343b10afc879742afe20&query=${query}&page=1`)
    //    console.log(response.data.results);
    //    this.setState({ movies:response.data.results})
       
    }
       handleSubmit = async e => {
           e.preventDefault();
           const { query } = this.state
          
       const response = await Axios.get(`https://api.themoviedb.org/3/search/movie?api_key=a11681fbc130343b10afc879742afe20&query=${query}&page=1`)
           
           this.setState({ movies:response.data.results})
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
                        <Link to={`/movies/${id}`}>{title}</Link></li>
                    })}
                </ul>
              
            </>
                 
        )
    }



}

// https://api.themoviedb.org/3/search/movie?api_key=a11681fbc130343b10afc879742afe20&query=&page=1

export default MoviesPage;