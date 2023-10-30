import axios from 'axios';
import { ActionTypes } from '../ActionTypes';

// ? will be sent when making api request
const options = {
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZTFkNTVlYWI0ZjQ3YjliMWMwNGMxMjI2YTgzZGMwNCIsInN1YiI6IjY1M2Y2MGUzZTg5NGE2MDBhZDU3YjhhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pJRQpRgVC51Lds85u0VFOHptAL7zXSrPqj32mXb1auk'
  }
};

// determine axios behavior
axios.defaults.baseURL = 'https://api.themoviedb.org/3';


// asynchronous action
export const getMovies = () => (dispatch) => {
  // operations performed during store transfer
  axios
    .get('/movie/popular', options)
   // transferring the data from the API to the reducer
    .then((res) =>
      dispatch({
        type: ActionTypes.SET_MOVIES,
        payload: res.data.results,
      })
    );
};

// action to get category data
export const getGenres = () => (dispatch) => {
//request to pull category data
  axios
    .get('/genre/movie/list', options)
    // transfer data to store
    .then((res) =>
      dispatch({
        type: ActionTypes.SET_GENRES,
        payload: res.data.genres,
      })
    );
};

//custom hook
export const fetchByUrl = async (url) => {
  const res = await axios.get(url, options);

  return res.data;
};












//

//

//

//

//

//

// function getMovies() {
//   return async function (dispatch) {
//     // asenkron işlemler yapılıyor....
//    await axios
//     dispatch({
//       // reducera gönderme
//     });
//   };
// }