import { defineStore } from 'pinia';

export const useMovieStore = defineStore('movieStore', {
  state: () => ({
    movies: [
      {
        id: 102,
        original_title: 'Spider-Man',
        overview:
          'After being bitten by a genetically altered spider at Oscorp, nerdy but endearing high school student Peter Parker is endowed with amazing powers.',
        poster_path: '/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg',
        release_date: '2002-05-01',
        isWatched: false,
      },
      {
        id: 32,
        original_title: 'The Batman',
        overview:
          'In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as The Riddler.',
        poster_path: '/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg',
        release_date: '2022-03-01',
        isWatched: true,
      },
    ],

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
