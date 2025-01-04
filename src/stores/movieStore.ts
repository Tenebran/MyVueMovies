import { defineStore } from 'pinia';
import type { Movie } from '../types';
import { ref, computed } from 'vue';

export const useMovieStore = defineStore('movieStore', () => {
  const movies = ref([] as Movie[]);
  const activeTab = ref(2);

  const setActiveTab = (id: number) => {
    activeTab.value = id;
  };

  const toggleWatch = (id: number) => {
    const movie = movies.value.find((el) => el.id === id);
    if (movie) {
      movie.isWatched = !movie.isWatched;
    }
  };

  const deleteMovie = (id: number) => {
    const index = movies.value.findIndex((el) => el.id === id);
    if (index !== -1) {
      movies.value.splice(index, 1);
    }
  };

  const watchedMovies = computed(() => {
    return movies.value.filter((el) => el.isWatched);
  });

  const unWatchedMovies = computed(() => {
    return movies.value.filter((el) => !el.isWatched);
  });

  return {
    setActiveTab,
    toggleWatch,
    deleteMovie,
    movies,
    activeTab,
    watchedMovies,
    unWatchedMovies,
  };
});
