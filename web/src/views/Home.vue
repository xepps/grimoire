<template>
  <div class="home">
    <SearchBar :baseUrl="this.baseUrl" />
    <SearchResults />
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue';
import SearchResults from '@/components/SearchResults.vue';

export default {
  name: 'home',
  components: {
    SearchBar,
    SearchResults,
  },
  data: () => ({
    baseUrl: window.location.origin,
  }),
};
</script>
