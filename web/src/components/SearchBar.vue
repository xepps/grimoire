<template>
    <div class="searchBar">
        <b-form-input
            class="searchBar__input"
            v-model="searchTerm"
            placeholder="What might you find..."
            v-on:keyup="onSearchInput()"
        />
    </div>
</template>

<script>
export default {
  name: 'SearchBar',
  data: () => ({
    searchTerm: '',
    searchDebounce: null,
  }),
  async created() {
    await this.$store.dispatch('spells/getByTerm', { term: this.searchTerm });
  },
  methods: {
    onSearchInput() {
      clearTimeout(this.searchDebounce);
      this.searchDebounce = setTimeout(async () => {
        await this.$store.dispatch('spells/getByTerm', { term: this.searchTerm });
        this.$router.push('/');
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
