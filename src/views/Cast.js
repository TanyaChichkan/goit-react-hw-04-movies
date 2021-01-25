import React, { Component } from 'react';
import fetchAPI from '../services/fetchFunc';
import Spinner from '../Spinner';

export default class Cast extends Component {

  state={
    actors:[],
    isShown:false
  }

    componentDidMount() {
    this.setState({isShown:true})
   fetchAPI.fetchCast(this.props.match.params.movieId)
    .then(data=>this.setState({actors:[...data.cast]}))
    .catch(err=>console.log(err))
    .finally(()=>this.setState({isShown:false}))

  }

    render(){
      const {actors,isShown} = this.state;
    return (
      <>
      <h2>Cast</h2>
      {isShown && <Spinner/>}

      {actors.length >0 && (
        <ul>
          {actors.map(({id,profile_path,name,character})=>(
            <li key={id}>
              {profile_path && (<img src={`https://image.tmdb.org/t/p/w200${profile_path}`} alt={name}/>)}
              <p>{name}</p>
              <p>{character}</p>
            </li>
      ))}
      </ul>
      )}
      </>
    );
  }
}