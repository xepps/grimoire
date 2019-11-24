<template>
  <router-link :to="`/spell/${result._source.uri}`" class="result__link">
    <b-card
      footer-tag="footer"
      :img-src="`/img/${result._source.type.toLowerCase()}.jpg`"
    >
      <b-card-title v-html="highlightedName"></b-card-title>
      <b-card-text>
        <small class="text-muted">
          A level {{ result._source.level }} {{ result._source.type }}
          {{ result._source.level ? 'spell' : 'cantrip' }}
        </small>
      </b-card-text>
      <b-card-text class="main-text" v-html="this.highlightedDescription.substring(0, 240)" />
      <em slot="footer">Usable by {{ result._source.casters.map(s => `${s}s`).join(', ') }}</em>
    </b-card>
  </router-link>
</template>

<script>

export default {
  name: 'SearchResult',
  props: ['result'],
  computed: {
    highlightedName() {
      return this.result.highlight && this.result.highlight.name
        ? this.result.highlight.name[0]
        : this.result._source.name;
    },
    highlightedDescription() {
      return this.result.highlight && this.result.highlight.description
        ? this.result.highlight.description.join('<br><br>')
        : this.result._source.description;
    },
  },
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
