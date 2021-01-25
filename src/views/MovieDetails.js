
import {Link} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import mainRoutes from '../routes/mainRoutes';

import fetchAPI from '../services/fetchFunc';
import Spinner from '../Spinner';

import {button,section,filmWrapper,textWrapper,genres,genreItem,sectionWrapper} from './MovieDetails.module.css';
import DetailsRoutes from '../components/details/detailsRoutes';


const MovieDetails =({location,match,history})=> {
  const [movie,setMovie]= useState({});
  const [isShown,setIsShown] = useState(false);
  const [err,setError] = useState(null);

  useEffect(() => {
    setLoading();
    fetchAPI.fetchByID(match.params.movieId)
    .then(data=>data)
    .then(movie=>setMovie(movie))
    .catch(err=>{
      setError(err.message)})
    .finally(setLoading);
  }, []);

  const setLoading=()=>{
    setIsShown(prev=>{
      return !prev});
  };

  const handleBackPage=()=>{
    const {state} = location;

    if(state && state.from){
      return  history.push(state.from)
    }

    return history.push(mainRoutes[1].path);
  };


    return (
    <div className={section}>

      {isShown && <Spinner/>}

        <button type="button" onClick={handleBackPage} className={button}>Go back</button>
        {movie && (

        <div className={sectionWrapper}>
        <div style={{display:"flex"}}>
          <div className={filmWrapper}>
            {(movie.poster_path || movie.backdrop_path ) && (<img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.name ? movie.name :  movie.title}
              width="200" height="280"
            />)}
           </div>

            <div className = {textWrapper}>

              {!movie.isAxiosError ?

              (<><h1>{movie.name ? movie.name :  movie.title}</h1>
              <p>User score: {movie.vote_average}</p>
              <h3>Overview:</h3>
              <p>{movie.overview}</p></>) :

                (<h2>Unfortunately, we don't have any information about this movie  for now.
                  <p>Please, look for another one.</p>
                </h2>) }

              {movie.genres && (
                <>
                <h3>Genres</h3>
                <ul className={genres}>
                  {movie.genres.length >0 && movie.genres.map((genre)=>(<li key={genre.id} className={genreItem}>{genre.name}</li>))}
                </ul>
                </>
                )
                }
            </div>
        </div>
          <hr/>

          {!movie.isAxiosError && (
            <>
          <div>
            <ul>
            <h3>Additional Information</h3>
            <li>
              <Link to={{pathname:`${match.url}/cast`}}>Cast</Link>
            </li>

            <li>
              <Link to={{pathname:`${match.url}/reviews`,
                state:{from: location.state?.from }}}>Reviews</Link>
            </li>
            </ul>
          </div>
          <hr/>
          </>)}

          <DetailsRoutes/>
        </div>
      )}

    </div>
  );

};

export default MovieDetails;