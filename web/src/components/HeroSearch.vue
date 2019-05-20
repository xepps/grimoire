<template>
  <div>
    <b-jumbotron class="hero" :class="title.class">
      <template slot="header">{{ title.text }}</template>

      <template slot="lead">
        <SearchBar />
      </template>

    </b-jumbotron>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue';

export default {
  name: 'HeroSearch',
  computed: {
    title() {
      return [
        { class: 'phb', text: 'Discover\npowerful and forgotten spells' },
        { class: 'mm', text: 'Explore\nlong lost arcane lore' },
        { class: 'dmg', text: 'Delve\ninto the misty tomes' },
      ][Math.floor(Math.random() * 3)];
    },
  },
  components: {
    SearchBar,
  },
};
</script>

<style lang="scss" scoped>
  .hero {
    background-size: cover;
    background-position: center;
    border-radius: 0;

    &.mm {
      background-image: url('../assets/DnD_MM_Art.jpg');
    }
    &.phb {
      background-image: url('../assets/DnD_PHB_Art.jpg');
    }
    &.dmg {
      background-image: url('../assets/DnD_DMG_Art.jpg');
    }
  }

  .hero h1 {
    font-family: 'Berkshire Swash', cursive;
    color: white;
    text-shadow: black 0px 0px 5px;
    white-space: pre-wrap;
  }
</style>
