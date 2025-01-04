<template>
  <form @submit.prevent="searchMovies.getMovies(searchMovie)">
    <input type="text" class="search-input" placeholder="movie title" v-model="searchMovie" />
  </form>
  <Loader v-if="searchMovies.loading" />
  <div v-else>
    <Movie v-for="movie in searchMovies.movies" :movie="movie" :key="movie.id" :is-search="true" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useSearchMovieStore } from '../stores/searchStore';
import Loader from './Loader.vue';
import Movie from './Movie.vue';

const searchMovies = useSearchMovieStore();

const searchMovie = ref('');

console.log('searchMovies.movies', searchMovies.loading);
</script>

<style scoped lang="scss">
.search {
  &-input {
    border: 1px solid #e7e7e7;
    width: 100%;
    height: 40px;
    padding: 0 10px;
    margin-bottom: 20px;
    border-radius: 10px;
  }
}
</style>
