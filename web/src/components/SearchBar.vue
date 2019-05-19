<template>
    <div class="searchBar">
        <input
            type="text"
            class="searchBar__input"
            v-model="searchTerm"
            v-on:keyup="onSearchInput()"
        />
        <p class="searchBar__hits" v-if="hits">{{ hits }} hits!</p>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'SearchBar',
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
        if (this.searchTerm) await this.$store.dispatch('spells/getByTerm', { term: this.searchTerm, offset: this.searchOffset });
        else await this.$store.dispatch('spells/clearResults');
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
