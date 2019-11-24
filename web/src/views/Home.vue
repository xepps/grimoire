<template>
  <b-container class="home">
    <SearchResults />
  </b-container>
</template>

<script>
import SearchResults from '@/components/SearchResults.vue';

export default {
  name: 'home',
  components: {
    SearchResults,
  },
};
</script>
