<template>
  <div class="searchResults">
      <SearchResult v-for="result in results" :key="result.id" :result="result" />
    <LoadMore v-if="results.length" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import LoadMore from '@/components/LoadMore.vue';
import SearchResult from '@/components/SearchResult.vue';

export default {
  name: 'SearchResults',
  components: { LoadMore, SearchResult },
  computed: mapState({
    results: state => state.spells.spells,
  }),
};
</script>
