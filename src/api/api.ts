import axios from 'axios';

const API_KEY = 'ef50864552215c09a8cc8deaa0bd8c04';
const BASE_URL = 'https://api.themoviedb.org/';

export const searchMovie = (movie: string) => {
  return axios.get(`${BASE_URL}3/search/movie`, {
    params: {
      query: movie,
      api_key: API_KEY,
    },
  });
};
