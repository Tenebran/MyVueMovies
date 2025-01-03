<script setup lang="ts">
import { useMovieStore } from './stores/movieStore';
import Movie from './components/Movie.vue';

const movieStore = useMovieStore();
</script>

<template>
  <main>
    <heade class="header">
      <img src="/logo.svg" alt="logo" class="header-logo" />
      <h2 class="header-title">My Vue Movies</h2>
    </heade>
    <div class="tabs">
      <button :class="['btn', { btn_green: movieStore.activeTab === 1 }]">Favorite</button>
      <button :class="['btn', { btn_green: movieStore.activeTab === 2 }]">Serach</button>
    </div>

    <Movie
      v-if="movieStore.activeTab === 1"
      v-for="movie in movieStore.movies"
      :movie="movie"
      :key="movie.id" />
  </main>
</template>

<style lang="scss">
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
    text-shadow: 2px 2px 4px rgba(66, 184, 131, 0.8);
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
    background: #42b883;
  }
}
.tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}
</style>
