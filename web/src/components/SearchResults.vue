<template>
  <div class="searchResults mb-4">
    <b-card-group columns>
      <SearchResult v-for="result in limitedResults" :key="result._id" :result="result" />
    </b-card-group>
    <h5 v-if="!limitedResults.length">No results found</h5>
    <LoadMore v-if="results.length" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import LoadMore from '@/components/LoadMore.vue';
import SearchResult from '@/components/SearchResult.vue';

export default {
  name: 'SearchResults',
  props: {
    limit: {
      type: Number,
      default: -1,
    },
    filter: {
      type: String,
      default: '',
    },
  },
  components: { LoadMore, SearchResult },
  computed: {
    ...mapState({
      results: state => state.spells.spells,
    }),
    limitedResults() {
      return this.limit > -1 ? this.filteredResults.slice(0, this.limit) : this.filteredResults;
    },
    filteredResults() {
      return this.filter
        ? this.results.filter(result => result._source.uri !== this.filter)
        : this.results;
    },
  },
};
</script>

<style lang="scss" scoped>
.card-columns {
  @media (min-width: 576px) {
    column-count: 1;
  }
  @media (min-width: 768px) {
    column-count: 2;
  }
  @media (min-width: 992px) {
    column-count: 3;
  }
}
</style>
