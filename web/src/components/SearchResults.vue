<template>
  <div class="searchResults">
    <h1 v-if="results.length">Results</h1>
    <ul class="searchResults__list">
      <li class="searchResults__item" v-for="result in results" :key="result.id" >
        <h2 class="searchResults__item__name">{{ result._source.name }}</h2>
        <p class="searchResults__item__description">{{ result._source.description }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'SearchResults',
  computed: mapState({
    results: state => state.spells.spells,
  }),
};
</script>

<style lang="scss" scoped>
  .searchResults__list {
    list-style: none;
    padding-left: 0;
  }

  .searchResults__item {
    text-align: left;
    display: flex;
  }

  .searchResults__item__name {
    flex: 1;
    text-align: center;
  }

  .searchResults__item__description {
    width: 80%;
    white-space: pre-wrap;
  }
</style>
