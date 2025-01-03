<script setup lang="ts">
import { useMovieStore } from './stores/movieStore';

const movieStore = useMovieStore();
console.log('movieStore', movieStore.movies);
</script>

<template>
  <heade class="header">
    <img src="/logo.svg" alt="logo" class="header-logo" />
    <h2 class="header-title">My Vue Movies</h2>
  </heade>
  <div class="movies" v-for="movies in movieStore.movies">
    {{ movies.release_date }}
  </div>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;

  &-logo {
    max-width: 50px;
    margin-right: 10px;
  }
  &-title {
    text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.8);
  }
}

.btn {
  border: none;
  width: 100px;
  height: 40px;
  font-size: 14px;
  margin: 0 10px;
  border-radius: 10px;
  cursor: pointer;
  background: #efefef;

  &:hover {
    opacity: 0.7;
  }

  &_green {
    background: #37df5c;
  }
}
.tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}
</style>
