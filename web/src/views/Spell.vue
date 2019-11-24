<template>
  <div class="spell">
    <HeroSearch />
    <SpellResult :slug="$route.params.id" />
  </div>
</template>

<script>
import HeroSearch from '@/components/HeroSearch.vue';
import SpellResult from '@/components/SpellResult.vue';

export default {
  name: 'spell',
  components: {
    HeroSearch,
    SpellResult,
  },
};
</script>
