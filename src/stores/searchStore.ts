import { defineStore } from 'pinia';
import { searchMovie } from '../api/api';

export const useSearchMovieStore = defineStore('searchMovieStore', {
  state: () => ({
    movies: [],
  }),
  actions: {
    async getMovies(search: string) {
      try {
        const resp = await searchMovie(search);
        this.movies = resp.data.results;
        console.log('resp.data.results', resp.data.results);
      } catch {
        console.log('error');
      }
    },
  },
});
