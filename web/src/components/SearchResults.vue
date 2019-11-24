<template>
  <div class="searchResults">
      <b-card-group columns class="m-4">
        <SearchResult v-for="result in limitedResults" :key="result.id" :result="result" />
      </b-card-group>
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
