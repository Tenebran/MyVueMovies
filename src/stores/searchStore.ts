import { defineStore } from 'pinia';
import { searchMovie } from '../api/api';

type Movie = {
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  isWatched: boolean;
};

export const useSearchMovieStore = defineStore('searchMovieStore', {
  state: () => ({
    movies: [] as Movie[],
    loading: false,
  }),
  actions: {
    async getMovies(search: string) {
      this.loading = true;
      try {
        const resp = await searchMovie(search);
        this.movies = resp.data.results;
        console.log('resp.data.results', resp.data.results);
      } catch {
        console.log('error');
      } finally {
        this.loading = false;
      }
    },
  },
});
