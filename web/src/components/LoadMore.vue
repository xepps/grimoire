<template>
  <div class="loadMore">&nbsp;</div>
</template>

<script>
import inViewport from 'vue-in-viewport-mixin';

export default {
  name: 'LoadMore',
  mixins: [inViewport],
  watch: {
    'inViewport.now': function more(visible) { if (visible) this.viewMore(); },
  },
  methods: {
    viewMore() {
      this.$store.dispatch('spells/nextResults');
    },
  },
};
</script>
