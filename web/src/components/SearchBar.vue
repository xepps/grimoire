<template>
    <div class="search">
        <input
            type="text"
            class="search__input"
            v-model="searchTerm"
            v-on:keyup="onSearchInput()"
        />
        <p class="search__hits">{{ numHits }} hits!!</p>
    </div>
</template>

<script>
const axios = require('axios');

export default {
  name: 'SearchBar',
  props: {
    baseUrl: String,
  },
  data: () => ({
    searchTerm: '',
    searchDebounce: null,
    searchResults: [],
    numHits: null,
    searchOffset: 0,
  }),
  methods: {
    onSearchInput() {
      clearTimeout(this.searchDebounce);
      this.searchDebounce = setTimeout(async () => {
        this.searchOffset = 0;
        this.searchResults = await this.search();
      }, 300);
    },
    async search() {
      const response = await axios.get(`${this.baseUrl}/api/search`, { params: { term: this.searchTerm, offset: this.searchOffset } });
      this.numHits = response.data.hits.total;
      return response.data.hits.hits;
    },
  },

};
</script>

<style lang="scss" scoped>
    .search__input {
        width: 100%;
        margin: 8px;
    }
</style>
