<template>
  <div class="searchResults">
      <b-card-group columns class="m-4">
        <SearchResult v-for="result in results" :key="result.id" :result="result" />
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
  components: { LoadMore, SearchResult },
  computed: mapState({
    results: state => state.spells.spells,
  }),
};
</script>
