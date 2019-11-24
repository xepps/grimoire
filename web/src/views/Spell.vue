<template>
  <div class="spell">
    <b-container>
      <SpellResult :slug="$route.params.id" />
      <h2>More like this</h2>
      <SearchResults limit="3" :filter="$route.params.id"/>
    </b-container>
  </div>
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
