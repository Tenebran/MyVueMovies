<template>
  <div class="movie">
    <img
      :src="`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`"
      :alt="movie.original_title"
      class="movie-image" />
    <div class="movie-name">{{ movie.original_title }} {{ movie.release_date }}</div>

    <span class="movie-overview">{{ movie.overview }}</span>
  </div>
</template>

<script setup lang="ts">
type Movie = {
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  isWatched: boolean;
};

defineProps<{
  movie: Movie;
}>();
</script>

<style scoped lang="scss">
.movie {
  display: grid;
  grid-template-columns: 200px 1fr;
  column-gap: 30px;
  margin-bottom: 20px;
  border: 2px solid #efefef;
  padding: 10px;
  border-radius: 10px;

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
      color: #fff;
      background: #ff2a2a;
    }

    &-watched {
      color: #fff;
      background: #1eb4c3;

      &__icon {
        width: 15px;
        margin-left: 10px;
      }
    }
  }
}
</style>
