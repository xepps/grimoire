<template>
  <b-container class="spell">
    <SpellResult :slug="$route.params.id" />
    <hr>
    <h2 class="mt-4">More like this</h2>
    <SearchResults :limit="3" :filter="$route.params.id"/>
  </b-container>
</template>

<script>
import SpellResult from '@/components/SpellResult.vue';
import SearchResults from '@/components/SearchResults.vue';

export default {
  name: 'spell',
  components: {
    SpellResult,
    SearchResults,
  },
};
</script>
