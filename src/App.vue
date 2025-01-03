<script setup lang="ts">
import { useMovieStore } from './stores/movieStore';
import Movie from './components/Movie.vue';

const movieStore = useMovieStore();
</script>

<template>
  <main>
    <header class="header">
      <img src="/logo.svg" alt="logo" class="header-logo" />
      <h2 class="header-title">My Vue Movies</h2>
    </header>
    <div class="tabs">
      <button
        :class="['btn', { btn_green: movieStore.activeTab === 1 }]"
        @click="movieStore.setActiveTab(1)">
        Favorite
      </button>
      <button
        :class="['btn', { btn_green: movieStore.activeTab === 2 }]"
        @click="movieStore.setActiveTab(2)">
        Serach
      </button>
    </div>
    <div v-if="movieStore.activeTab === 1">
      <h3 v-if="movieStore.watchedMovies.length >= 1">
        Watched Movies ({{ movieStore.watchedMovies.length }})
      </h3>
      <Movie v-for="movie in movieStore.watchedMovies" :movie="movie" :key="movie.id" />

      <h3 v-if="movieStore.unWatchedMovies.length >= 1">
        Unwatched Movies ({{ movieStore.unWatchedMovies.length }})
      </h3>
      <Movie v-for="movie in movieStore.unWatchedMovies" :movie="movie" :key="movie.id" />
    </div>
    <div class="seacrh" v-else>search</div>
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
