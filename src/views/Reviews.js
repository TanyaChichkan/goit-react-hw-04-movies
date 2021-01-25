import React, { Component } from 'react';
import fetchAPI from '../services/fetchFunc';
import Spinner from '../Spinner';


export default class Reviews extends Component {

  state={reviews:[],
    isShown:false}

  componentDidMount() {
    this.setState({isShown:true})
   fetchAPI.fetchReviews(this.props.match.params.movieId)
    .then(data=>{
      return this.setState({reviews:[...data.results]})})
    .catch(err=>console.log(err))
    .finally(()=>this.setState({isShown:false}));

  }


    render(){
      const {reviews,isShown} = this.state;
    return (
      <>
      {isShown && <Spinner/>}

      {reviews.length >0 ? (
        <ul>
          {reviews.map(({id,author,content})=>(
            <li key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
            </li>
      ))}
      </ul>
      ): (
        <p>No reviews available for this movie</p>
      )}
      </>
    );
  }
}