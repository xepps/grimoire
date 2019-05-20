<template>
  <div class="home">
    <HeroSearch />
    <SearchResults />
  </div>
</template>

<script>
import HeroSearch from '@/components/HeroSearch.vue';
import SearchResults from '@/components/SearchResults.vue';

export default {
  name: 'home',
  components: {
    HeroSearch,
    SearchResults,
  },
};
</script>
