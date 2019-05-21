<template>
  <b-card
    footer-tag="footer"
    class="m-4"
  >
    <b-card-title>{{ result._source.name }}</b-card-title>
    <b-card-text>
      <small class="text-muted">
        A level {{ result._source.level }} {{ result._source.type }}
        {{ result._source.level ? 'spell' : 'cantrip' }}
      </small>
    </b-card-text>
    <b-card-text class="main-text">{{
      result._source.description.substring(0, 240)
    }}...</b-card-text>
    <em slot="footer">Usable by {{ result._source.casters.map(s => `${s}s`).join(', ') }}</em>
  </b-card>
</template>

<script>

export default {
  name: 'SearchResult',
  props: ['result'],
};

</script>

<style lang="scss" scoped>
  .main-text {
    white-space: pre-wrap;
  }
</style>
