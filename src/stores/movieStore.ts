import { defineStore } from 'pinia';
import type { Movie } from '../types';

export const useMovieStore = defineStore('movieStore', {
  state: () => ({
    movies: [] as Movie[],

    activeTab: 1,
  }),

  getters: {
    watchedMovies(state) {
      return state.movies.filter((el) => el.isWatched);
    },
    unWatchedMovies(state) {
      return state.movies.filter((el) => !el.isWatched);
    },
    totalCountMovies(state) {
      return state.movies.length;
    },
  },

  actions: {
    setActiveTab(id: number) {
      this.activeTab = id;
    },
    toggleWatch(id: number) {
      const movie = this.movies.find((el) => el.id === id);
      if (movie) {
        movie.isWatched = !movie.isWatched;
      }
    },
    deleteMovie(id: number) {
      const index = this.movies.findIndex((el) => el.id === id);
      if (index !== -1) {
        this.movies.splice(index, 1);
      }
    },
  },
});
