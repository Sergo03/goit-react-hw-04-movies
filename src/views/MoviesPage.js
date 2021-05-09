import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

class MoviesPage extends Component{
    state = {
    //  movies:[],
    }
    
//  async componentDidMount() {
//        const response = await Axios.get(' https://api.themoviedb.org/3/trending/all/day?api_key=a11681fbc130343b10afc879742afe20')
//     //    console.log(response.data.results);
//        this.setState({ movies:response.data.results})
       
// }



    render() {
        // const { movies}=this.state
        // console.log(this.props.match.url);

        return (
            <>
                <ul>
                    {/* {movies.map(({name,id,title}) => {
                        return (
                            <li key={id}>
                                <Link to={`${this.props.match.url}/${id}`}>{title}</Link>
                            </li>
                       )
                    })} */}
                </ul>
            </>
                 
        )
    }



}

export default MoviesPage;