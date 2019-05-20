<template>
  <div class="searchResults">
      <b-card
        v-for="result in results"
        :key="result.id"
        :title="result._source.name"
        header-tag="header"
        footer-tag="footer"
        class="m-4"
      >
        <h6 slot="header" class="mb-0">
          A level {{ result._source.level }} {{ result._source.type }}
          {{ result._source.level ? 'spell' : 'cantrip' }}
        </h6>
        <b-card-text>{{ result._source.description.substring(0, 240) }}...</b-card-text>
        <em slot="footer">Usable by {{ result._source.casters.map(s => `${s}s`).join(', ') }}</em>
      </b-card>
    <LoadMore v-if="results.length" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import LoadMore from '@/components/LoadMore.vue';

export default {
  name: 'SearchResults',
  components: { LoadMore },
  computed: mapState({
    results: state => state.spells.spells,
  }),
};
</script>

<style lang="scss" scoped>
  .card-text {
    white-space: pre-wrap;
  }
</style>
