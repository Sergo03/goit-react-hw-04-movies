import React, { Component} from 'react';
import Axios from 'axios';

class Cast extends Component{
  state = {
    cast:[]
 }

  async componentDidMount() {
      const {movieId} = this.props.match.params
      const response = await Axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=a11681fbc130343b10afc879742afe20`)
      this.setState({ cast:response.data.cast })
      
  }
  
  
  render() {
    const { cast } = this.state;
    
    
    return (
      <>
        <ul>
          {cast.map(({character,name,profile_path,id }) => {
            return (
              <li key={id}> {profile_path &&<img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${profile_path}`} alt={name} />} <p>{name}</p> <p>character: {character}</p></li>
          )}) }
      </ul>
      </>
    )
  }

}

export default Cast;


// https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=a11681fbc130343b10afc879742afe20