<template>
  <div class="spell-result" v-if="spell">
    <h1>{{ spell.name }}</h1>
    <h2>{{ spellShortDescription }} </h2>
    <b-row>
      <b-col cols="4">
        <b-table stacked :items="quickInfo"></b-table>
      </b-col>
    </b-row>
    <h3>Description</h3>
    <p v-for="paragraph in this.spell.description.split('\n')" :key="paragraph">
      {{ paragraph }}
    </p>
    <div v-if="spell.at_higher_levels">
      <h3>At higher levels</h3>
      <p v-for="paragraph in this.spell.at_higher_levels.split('\n')" :key="paragraph">
        {{ paragraph }}
      </p>
    </div>
  </div>
</template>

<script>
import search from '@/api/search';

export default {
  name: 'SearchResult',
  props: ['slug'],
  computed: {
    spellShortDescription() {
      return this.spell.level
        ? `A level ${this.spell.level} ${this.spell.type} spell`
        : `A${['a', 'e', 'i', 'o', 'u'].includes(this.spell.type[0].toLowerCase()) ? 'n' : ''} ${this.spell.type} cantrip`;
    },
    quickInfo() {
      const components = this.spell.components.map((c) => {
        if (c === 'V') return 'Verbal';
        if (c === 'S') return 'Somatic';
        return 'Material';
      }).join(', ');
      const materialComponents = this.spell.material_component ? `(${this.spell.material_component})` : '';

      return [{
        casting_time: this.spell.casting_time,
        available_to: this.spell.casters.join(', '),
        duration: this.spell.duration,
        range: this.spell.range,
        components: `${components} ${materialComponents}`,
      }];
    },
  },
  data() {
    return {
      spell: null,
    };
  },
  async created() {
    await this.updateSpell();
  },
  methods: {
    setData(data) {
      this.spell = data;
    },
    async updateSpell() {
      const result = await search.getBySlug(this.slug);
      this.spell = result.data;
      await this.$store.dispatch('spells/getByTerm', { term: this.spell.name.split(' ').pop() });
    },
  },
  watch: {
    async slug() {
      await this.updateSpell();
    },
  },
};

</script>

<style lang="scss" scoped>
</style>
