<template>
    <div class="search">
        <input
            type="text"
            class="search__input"
            v-model="searchTerm"
            v-on:keyup="onSearchInput()"
        />
        <p class="search__hits" v-if="hits">{{ hits }} hits!</p>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'SearchBar',
  props: {
    baseUrl: String,
  },
  computed: mapState({
    hits: state => state.spells.hits,
  }),
  data: () => ({
    searchTerm: '',
    searchDebounce: null,
    searchOffset: 0,
  }),
  methods: {
    onSearchInput() {
      clearTimeout(this.searchDebounce);
      this.searchDebounce = setTimeout(async () => {
        await this.$store.dispatch('spells/getByTerm', { term: this.searchTerm, offset: this.searchOffset });
      }, 300);
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
