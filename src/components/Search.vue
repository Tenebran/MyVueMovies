<template>
  <form @submit.prevent="">
    <input type="text" class="search-input" placeholder="movie title" v-model="searchMovie" />
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const searchMovie = ref('');
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
