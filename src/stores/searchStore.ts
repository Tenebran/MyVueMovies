import { defineStore } from 'pinia';
import { searchMovie } from '../api/api';
import { useMovieStore } from './movieStore';
import type { Movie } from '../types';

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
    addToUserMovies(movie: Movie) {
      const movieStore = useMovieStore();
      movieStore.movies.push({ ...movie, isWatched: false });
      movieStore.activeTab = 1;
    },
  },
});
