<template>
  <div class="home">
    <SearchResults />
  </div>
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
