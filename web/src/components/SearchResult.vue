<template>
  <router-link :to="`/spell/${result._source.uri}`" class="result__link">
    <b-card
      footer-tag="footer"
      :img-src="`/img/${result._source.type.toLowerCase()}.jpg`"
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
  </router-link>
</template>

<script>

export default {
  name: 'SearchResult',
  props: ['result'],
};

</script>

<style lang="scss" scoped>
  .result__link {
    .card-img {
      transition: 0.3s;
      opacity: 0.9;
    }

    &:hover {
      .card-img {
        opacity:1;
      }
    }
  }

  .card-body,
  .card-footer {
    color: #2c3e50;
  }

  .main-text {
    white-space: pre-wrap;
  }
</style>
