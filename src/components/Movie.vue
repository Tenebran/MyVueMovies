<template>
  <div class="movie">
    <img
      :src="`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`"
      :alt="movie.original_title"
      class="movie-img" />
    <div>
      <div class="movie-name">{{ movie.original_title }} {{ movie.release_date }}</div>
      <span class="movie-overview">{{ movie.overview }}</span>
      <div class="movie-buttons" v-if="!isSearch">
        <button class="btn movie-buttons-watched" @click="movieStore.toggleWatch(movie.id)">
          <span v-if="!movie.isWatched">Watched</span>
          <span v-else="!!movie.isWatched">Unwatched</span>
        </button>
        <button class="btn movie-buttons-delete" @click="movieStore.deleteMovie(movie.id)">
          Delete
        </button>
      </div>

      <div class="movie-buttons" v-else>
        <button class="btn movie-buttons-watched" @click="searchStore.addToUserMovies(movie)">
          <span>Add</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMovieStore } from '../stores/movieStore';
import { useSearchMovieStore } from '../stores/searchStore';
import type { Movie } from '../types';

defineProps<{
  movie: Movie;
  isSearch: boolean;
}>();

const movieStore = useMovieStore();
const searchStore = useSearchMovieStore();
</script>

<style scoped lang="scss">
.movie {
  display: grid;
  grid-template-columns: 200px 1fr;
  column-gap: 30px;
  margin-bottom: 20px;
  border: 2px solid #42b883;
  padding: 10px;
  border-radius: 10px;
  background-color: #16161a;

  &-accept {
    margin-right: 10px;
  }
  &-img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 50%;
  }

  &-name {
    display: flex;
    align-items: center;
    font-size: 20px;
    margin-bottom: 20px;
  }
  &-overview {
    display: block;
    margin-bottom: 20px;
  }

  &-buttons {
    display: flex;
    align-items: center;
    justify-content: center;

    &-delete {
      color: #35495e;
      background: #ff2a2a;
    }

    &-watched {
      color: #35495e;
      background: #42b883;

      &__icon {
        width: 15px;
        margin-left: 10px;
      }
    }
  }
}
</style>
