import React, { Component } from 'react';
import Axios from 'axios';
import { Link , Route} from 'react-router-dom';


class HomePage extends Component {

 state = {
     movies:[],
    }

   async componentDidMount() {
       const response = await Axios.get(' https://api.themoviedb.org/3/trending/movie/day?api_key=a11681fbc130343b10afc879742afe20')
   
       this.setState({ movies:response.data.results})
       
}


    render() {
        const { movies}=this.state
        console.log(movies);
      
        return (
            <>
                <ul>
                    {movies.map(({id,title,name}) => (
                        
                         <li key={id}>
                                <Link to={`/movies/${id}`}>{title}</Link>
                        </li>
                    ))}
                </ul>
            </>
        )
    }

}




export default HomePage;