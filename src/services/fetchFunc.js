import axios from 'axios';

const baseURL = 'https://api.themoviedb.org/3/';
const apiKey = '3829507b4ce83dc3b5151cf87a1f90fa';

const fetchTrendingDay = async ()=>{
  try{
  const response = await axios.get(`${baseURL}trending/all/day?api_key=${apiKey}`);
  return response.data;
  }
  catch(err){
    return err;
  }
};

const fetchByID = async (movieID)=>{
  try{
  const response = await axios.get(`${baseURL}movie/${movieID}?api_key=${apiKey}&language=en-US`);
  return response.data;
  }
  catch(err){

    return err;
  }
};

const fetchByQuery = async (query)=>{
  try{
  const response = await axios.get(`${baseURL}search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`);
  return response.data;
  }
  catch(err){

    return err;
  }
};

const fetchCast = async (movieID)=>{
  try{
  const response = await axios.get(`${baseURL}movie/${movieID}/credits?api_key=${apiKey}&language=en-U`);
  return response.data;
  }
  catch(err){
    return err;
  }
};

const fetchReviews = async (movieID)=>{
  try{
  const response = await axios.get(`${baseURL}movie/${movieID}/reviews?api_key=${apiKey}&language=en-US&page=1`);
  return response.data;
  }
  catch(err){

    return err;
  }
};


export default{
  fetchTrendingDay, fetchByID, fetchByQuery, fetchCast,fetchReviews
}
