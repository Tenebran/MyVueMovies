import { defineStore } from 'pinia';
import { searchMovie } from '../api/api';
import { useMovieStore } from './movieStore';
import type { Movie } from '../types';
import { ref } from 'vue';

export const useSearchMovieStore = defineStore('searchMovieStore', () => {
  const loading = ref(false);
  const movies = ref([] as Movie[]);
  const movieStore = useMovieStore();

  const getMovies = async (search: string) => {
    loading.value = true;
    try {
      const resp = await searchMovie(search);
      movies.value = resp.data.results;
      console.log('resp.data.results', resp.data.results);
    } catch {
      console.log('error');
    } finally {
      loading.value = false;
    }
  };

  const addToUserMovies = (movie: Movie) => {
    movieStore.movies.push({ ...movie, isWatched: false });
    movieStore.activeTab = 1;
  };

  return { loading, movies, getMovies, addToUserMovies };
});
