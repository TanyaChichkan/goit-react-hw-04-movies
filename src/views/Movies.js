import React, {useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchForm from '../components/searchForm/Searchform';
import getParams from '../services/get-query-params';
import fetchAPI from '../services/fetchFunc';
import Spinner from '../Spinner';
import cinema from '../cinema.jpg';
import  {list,listItem,pageTitle,itemLink,section} from './Movies.module.css';
import NotificationPage from '../components/notification/NotificationPage';


const Movies=({location,history,match})=>{

  const[movies,setMovies] = useState([]);
  const [isShown,setisShown] = useState("");
  const[error,setError] = useState("");
  const[emptyArray,setEmptyArray] = useState(false);


  const  handleChangeQuery = query=>{
   history.push({
      pathname: location.pathname,
      search: `query=${query}`
    })

  };


  useEffect(()=>{
    const {query} = getParams(location.search);
    if(query){

    fetchMovies(query);
    }

  },[location.search])


  const setLoading = ()=>{
    setisShown(prev=>!prev)
  }

  const fetchMovies=(query)=>{
    setLoading();
    setError("");
    setEmptyArray(false);

    fetchAPI.fetchByQuery(query)
    .then(data=>{

     data.results.length ===0 ?
      setEmptyArray(true) :
      setMovies(prev=>[...data.results]);
    })
    .catch(err=>{
    setError(err.message)})
    .finally(setLoading);
  }

    return(
      <>
      <SearchForm onSubmit={handleChangeQuery}/>
      {isShown && <Spinner/>}

      {error && <NotificationPage text={error}/>}

      {(movies.length>0 && !emptyArray) &&
      (<div className={section}>
      <ul className={list}>
        {movies.map(({id,title,name,poster_path,backdrop_path}) => (
          <li key = {id} className={listItem}>
            <Link to={{pathname:`${match.url}/${id}`,
              state:{from:location}}} className={itemLink}>
              <img
              src={poster_path ? `https://image.tmdb.org/t/p/w200/${poster_path}` : cinema
              }
              alt={name ? name : title} width="200" height="300"/>

              {title? title: name}

            </Link>
          </li>
        ))}
      </ul>

      </div>)}
      {emptyArray && <h2>Nothing was found by your query.<p>Please, try another one</p></h2>}
      </>
    )

};

export default Movies;
