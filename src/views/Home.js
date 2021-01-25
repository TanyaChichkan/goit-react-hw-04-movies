import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import fetchAPI from '../services/fetchFunc';
import Spinner from '../Spinner';
import NotificationPage from '../components/notification/NotificationPage';
import {list,listItem,pageTitle,itemLink,section} from './Home.module.css';


const Home =({location})=>{

  const[movies,setMovies] = useState([]);
  const[isShown,setIsShown] = useState(false);
  const[error,setError] = useState("");


  useEffect(()=>{
    setLoading();

    fetchAPI.fetchTrendingDay()
    .then(data=>setMovies(data.results))
    .catch(err=>{
      setError(err.message)})
    .finally(setLoading);
  },[])

  const setLoading=()=>{
    setIsShown(prev=>{
      return !prev});
  }

    return (
      <div className={section}>

        {!error &&<h2 className={pageTitle}>Trending today</h2>}
        {isShown && <Spinner/>}
        {error && <NotificationPage text={error}/>}

        {movies &&
          (<ul className={list}>
            {movies.map(({id,title,name,poster_path,backdrop_path}) => (
              <li key = {id} className={listItem}>
                <Link to={{pathname:`movies/${id}`,
                    state:{from:location}}} className={itemLink}>
                    {poster_path &&
                    (<img
                    src={poster_path? `https://image.tmdb.org/t/p/w200/${poster_path}` :
                    `https://image.tmdb.org/t/p/w200${backdrop_path}`}
                    alt={name ? name : title}
                    width="200" height="300"
                />)}
                  {title? title: name}
                </Link>
              </li>
            ))}
          </ul>)}
      </div>
    )

};

export default Home;