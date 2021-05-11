import React, { Component} from 'react';
import Axios from 'axios';

class Reviews extends Component{
  state = {
    reviews:[]
 }

  async componentDidMount() {
      const {movieId} = this.props.match.params
      const response = await Axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=a11681fbc130343b10afc879742afe20&page=1`)
      this.setState({ reviews:response.data.results })
  }

  render() {
    const {reviews}=this.state
    
    return (
      <><ul>
        {reviews.map(({ author, content, id }) => {
          return <li key={id}> <p>{author}</p>  {content}</li>
        })}
      </ul>
      </>
    )
  }
}

export default Reviews












// https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=a11681fbc130343b10afc879742afe20&page=1